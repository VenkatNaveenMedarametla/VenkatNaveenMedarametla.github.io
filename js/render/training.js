import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderTrainingItem({ role, description, organization }) {
  return createElement("li", { className: "card training-item" }, [
    createElement("h3", { className: "card__title", text: role }),
    createElement("p", { className: "card__text", text: description }),
    renderOrganization(organization),
  ]);
}

export function renderTraining(items) {
  return createSection({ id: "training", title: "Training & Mentoring" }, [
    createElement("ul", { className: "card-grid" }, items.map(renderTrainingItem)),
  ]);
}
