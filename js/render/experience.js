import { createElement, createList, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderRole({ title, period, workMode, highlights }) {
  return createElement("details", { className: "role" }, [
    createElement("summary", { className: "role__summary" }, [
      createElement("h4", { className: "role__title", text: title }),
      createElement("span", { className: "role__meta", text: `${period} · ${workMode}` }),
    ]),
    createList(highlights, { className: "checklist" }),
  ]);
}

function renderCompany({ organization, summary, location, roles }) {
  return createElement("article", { className: "company" }, [
    createElement("header", { className: "company__header" }, [
      createElement("h3", { className: "company__name" }, [renderOrganization(organization)]),
      createElement("p", { className: "company__summary", text: summary }),
      createElement("p", { className: "company__meta", text: location }),
    ]),
    createElement("div", { className: "company__roles" }, roles.map(renderRole)),
  ]);
}

export function renderExperience(companies) {
  return createSection(
    { id: "experience", title: "Experience" },
    companies.map(renderCompany),
  );
}
