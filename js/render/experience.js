import { createElement, createList, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderRole({ title, highlights }) {
  return createElement("div", { className: "role" }, [
    createElement("h4", { className: "role__title", text: title }),
    createList(highlights, { className: "checklist" }),
  ]);
}

function renderCompany({ organization, location, period, roles }) {
  return createElement("article", { className: "company" }, [
    createElement("header", { className: "company__header" }, [
      createElement("h3", { className: "company__name" }, [renderOrganization(organization)]),
      createElement("p", { className: "company__meta", text: `${location} · ${period}` }),
    ]),
    roles.map(renderRole),
  ]);
}

export function renderExperience(companies) {
  return createSection(
    { id: "experience", title: "Experience" },
    companies.map(renderCompany),
  );
}
