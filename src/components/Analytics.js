"use client";

import Script from "next/script";
import { useEffect } from "react";

function sendEvent(name, props) {
  if (typeof window.plausible === "function") {
    window.plausible(name, { props });
  }
}

export function trackProjectRequest({ project, timeline }) {
  sendEvent("Demande préparée", { project, timeline });
}

export default function Analytics({ scriptUrl }) {
  useEffect(() => {
    const trackImportantClick = (event) => {
      const link = event.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const label = link.textContent.replace(/\s+/g, " ").trim().slice(0, 80);

      if (href.includes("#contact")) {
        sendEvent("Clic devis", { destination: href, label });
      } else if (href.startsWith("mailto:")) {
        sendEvent("Contact direct", { canal: "E-mail", label });
      } else if (href.startsWith("tel:")) {
        sendEvent("Contact direct", { canal: "Téléphone", label });
      }
    };

    document.addEventListener("click", trackImportantClick);
    return () => document.removeEventListener("click", trackImportantClick);
  }, []);

  if (!scriptUrl) return null;

  return (
    <>
      <Script id="plausible-queue" strategy="afterInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
      </Script>
      <Script src={scriptUrl} strategy="afterInteractive" />
    </>
  );
}
