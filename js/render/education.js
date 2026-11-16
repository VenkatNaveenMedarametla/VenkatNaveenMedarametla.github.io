import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderEducationItem({ degree, organization, location, period, grade }) {
  return createElement("article", { className: "education-item" }, [
    createElement("h3", { className: "card__title", text: degree }),
    createElement("p", { className: "education-item__school" }, [renderOrganization(organization)]),
    createElement("p", {
      className: "education-item__meta",
      text: `${location} · ${period} · ${grade}`,
    }),
  ]);
}

export function renderEducation(entries) {
  return createSection(
    { id: "education", title: "Education" },
    entries.map(renderEducationItem),
  );
}
