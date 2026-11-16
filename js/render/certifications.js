import { createElement, createExternalLink } from "./dom.js";

function renderCertification({ name, issuer, issued, credentialId, verifyUrl }) {
  return createElement("li", { className: "certification" }, [
    createElement("h4", { className: "certification__name", text: name }),
    createElement("p", { className: "certification__meta", text: `${issuer} · Issued ${issued}` }),
    credentialId &&
      createElement("p", { className: "certification__meta" }, [
        "Credential ID ",
        createElement("code", { className: "certification__id", text: credentialId }),
      ]),
    verifyUrl && createExternalLink("Verify credential", verifyUrl, "certification__link"),
  ]);
}

export function renderCertificationGroup({ title, items }) {
  return createElement("div", { className: "certification-group" }, [
    createElement("p", { className: "certification-group__label", text: title }),
    createElement("ul", { className: "certification-list" }, items.map(renderCertification)),
  ]);
}
