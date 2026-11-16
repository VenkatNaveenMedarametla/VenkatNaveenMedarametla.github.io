import { createElement, createExternalLink, createSection } from "./dom.js";

function renderCertification({ name, issuer, issued, credentialId, verifyUrl }) {
  return createElement("li", { className: "card certification" }, [
    createElement("h3", { className: "card__title", text: name }),
    createElement("p", { className: "card__text", text: issuer }),
    createElement("p", { className: "certification__meta", text: `Issued ${issued}` }),
    credentialId &&
      createElement("p", { className: "certification__meta", text: `Credential ID ${credentialId}` }),
    verifyUrl && createExternalLink("Verify credential", verifyUrl, "certification__link"),
  ]);
}

export function renderCertifications(certifications) {
  return createSection({ id: "certifications", title: "Certifications" }, [
    createElement("ul", { className: "card-grid" }, certifications.map(renderCertification)),
  ]);
}
