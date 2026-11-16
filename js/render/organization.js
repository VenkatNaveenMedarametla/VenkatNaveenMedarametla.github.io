import { createElement, createExternalLink } from "./dom.js";

export function renderOrganization({ name, logo, website }) {
  return createElement("span", { className: "org-badge" }, [
    createElement("img", {
      className: "org-logo",
      attributes: { src: logo, alt: "" },
    }),
    createExternalLink(name, website, "org-name"),
  ]);
}
