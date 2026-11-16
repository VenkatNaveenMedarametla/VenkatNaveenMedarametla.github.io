import { createElement, createExternalLink } from "./dom.js";

export function renderOrganization({ name, logo, website }) {
  return createElement("span", { className: "org-badge" }, [
    logo && createElement("img", {
      className: "org-logo",
      attributes: { src: logo, alt: "" },
    }),
    website
      ? createExternalLink(name, website, "org-name")
      : createElement("span", { className: "org-name", text: name }),
  ]);
}
