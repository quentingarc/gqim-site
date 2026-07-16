import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDirectory = path.join(projectRoot, "out");
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(target) : target;
    }),
  );
  return files.flat();
}

function extractAttributes(html, attribute) {
  const values = [];
  const pattern = new RegExp(`${attribute}=(?:"([^"]*)"|'([^']*)')`, "g");
  let match;

  while ((match = pattern.exec(html))) {
    values.push(match[1] ?? match[2]);
  }
  return values;
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function resolveLocalTarget(value) {
  const pathname = decodeURIComponent(value.split(/[?#]/, 1)[0]);
  if (!pathname || pathname === "/") return path.join(outDirectory, "index.html");

  const relativePath = pathname.replace(/^\//, "");
  if (path.extname(relativePath)) return path.join(outDirectory, relativePath);

  const pageTarget = path.join(outDirectory, relativePath, "index.html");
  if (await exists(pageTarget)) return pageTarget;
  return path.join(outDirectory, relativePath);
}

const exportedFiles = await walk(outDirectory);
const htmlFiles = exportedFiles.filter((file) => file.endsWith(".html"));

for (const file of exportedFiles) {
  const fileStats = await stat(file);
  const relativeFile = path.relative(outDirectory, file);
  if (fileStats.size === 0) errors.push(`${relativeFile}: fichier vide`);
  if (/ 2\.[^/]+$/.test(relativeFile)) {
    errors.push(`${relativeFile}: doublon suffixé 2`);
  }
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const relativeFile = path.relative(outDirectory, file);

  if (!html.includes('<html lang="fr"')) {
    errors.push(`${relativeFile}: langue française absente`);
  }

  if (relativeFile !== "404.html") {
    const canonicalCount = (html.match(/rel="canonical"/g) ?? []).length;
    if (canonicalCount !== 1) {
      errors.push(`${relativeFile}: ${canonicalCount} balise(s) canonical`);
    }
  }

  if (html.includes("/favicon-gqim.ico")) {
    errors.push(`${relativeFile}: ancien favicon référencé`);
  }
  if (html.includes("Projets Epitech") || html.includes("epitech/projects")) {
    errors.push(`${relativeFile}: ancien projet Epitech encore visible`);
  }
  if (/\d[\s\u00a0]*(?:€|euros?)/i.test(html)) {
    errors.push(`${relativeFile}: prix public détecté`);
  }

  const localReferences = [
    ...extractAttributes(html, "href"),
    ...extractAttributes(html, "src"),
  ].filter((value) => value.startsWith("/") && !value.startsWith("//"));

  for (const reference of new Set(localReferences)) {
    const target = await resolveLocalTarget(reference);
    if (!(await exists(target))) {
      errors.push(`${relativeFile}: cible locale absente ${reference}`);
    }
  }
}

const faqHtml = await readFile(path.join(outDirectory, "faq", "index.html"), "utf8");
const faqCount = (faqHtml.match(/<summary>/g) ?? []).length;
if (faqCount < 30) errors.push(`faq/index.html: seulement ${faqCount} questions`);

if (errors.length) {
  console.error(`Échec de la vérification (${errors.length} erreur(s)) :`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Export vérifié : ${htmlFiles.length} pages HTML, ${exportedFiles.length} fichiers et ${faqCount} questions FAQ.`,
  );
}
