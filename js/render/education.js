import { createElement } from "./dom.js";
import { renderOrganization } from "./organization.js";

export function renderEducationItem({ degree, organization, location, period, grade }) {
  return createElement("li", { className: "education-item" }, [
    createElement("h4", { className: "education-item__degree", text: degree }),
    createElement("p", { className: "education-item__school" }, [renderOrganization(organization)]),
    createElement("p", {
      className: "education-item__meta",
      text: `${location} · ${period} · ${grade}`,
    }),
  ]);
}
