import { createElement, createList, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderRole({ title, period, workMode, highlights }) {
  return createElement("details", { className: "role disclosure" }, [
    createElement("summary", { className: "disclosure__summary" }, [
      createElement("h4", { className: "role__title", text: title }),
      createElement("span", { className: "role__meta", text: `${period} · ${workMode}` }),
    ]),
    createList(highlights, { className: "checklist" }),
  ]);
}

function renderTrainingItem({ role, description }) {
  return createElement("li", { className: "card" }, [
    createElement("h5", { className: "card__title", text: role }),
    createElement("p", { className: "card__text", text: description }),
  ]);
}

function renderTraining(items) {
  return createElement("div", { className: "company__training" }, [
    createElement("h4", { className: "subheading", text: "Training & Mentoring" }),
    createElement("ul", { className: "card-grid" }, items.map(renderTrainingItem)),
  ]);
}

function renderCompany({ organization, summary, location, roles, training = [] }) {
  return createElement("article", { className: "company" }, [
    createElement("header", { className: "company__header" }, [
      createElement("h3", { className: "company__name" }, [renderOrganization(organization)]),
      createElement("p", { className: "company__summary", text: summary }),
      createElement("p", { className: "company__meta", text: location }),
    ]),
    createElement("div", { className: "company__roles" }, roles.map(renderRole)),
    training.length > 0 && renderTraining(training),
  ]);
}

export function renderExperience(companies) {
  return createSection(
    { id: "experience", title: "Experience" },
    companies.map(renderCompany),
  );
}
