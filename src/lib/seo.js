export function withTrailingSlash(path) {
  if (path === "/" || path.endsWith("/")) return path;
  return `${path}/`;
}

export function createServiceMetadata(service) {
  const canonical = withTrailingSlash(service.slug);

  return {
    title: service.eyebrow,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title: `${service.eyebrow} | GQIM`,
      description: service.description,
      url: canonical,
    },
  };
}
