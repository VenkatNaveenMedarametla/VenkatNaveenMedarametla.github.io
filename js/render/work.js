import { PROJECT_TRIGGER_ATTRIBUTE } from "../constants.js";
import { createElement, createList, createSection } from "./dom.js";

const ENTERPRISE_DISCLOSURE = "Enterprise work shown at a high level; confidential implementation details are omitted.";
const INTERACTIVE_CARD_CLASS = "project-card project-card--interactive";
const STATIC_CARD_CLASS = "project-card";

function renderExploreAction({ id }) {
  return createElement("button", {
    className: "project-card__action",
    text: "Explore details",
    attributes: {
      type: "button",
      "aria-haspopup": "dialog",
      [PROJECT_TRIGGER_ATTRIBUTE]: id,
    },
  });
}

function renderProjectCard(project) {
  const { category, title, summary, technologies, details } = project;
  return createElement("li", { className: details ? INTERACTIVE_CARD_CLASS : STATIC_CARD_CLASS }, [
    createElement("p", { className: "project-card__category", text: category }),
    createElement("h3", { className: "project-card__title", text: title }),
    createElement("p", { className: "project-card__summary", text: summary }),
    createList(technologies, { className: "chips" }),
    details && renderExploreAction(project),
  ]);
}

export function renderSelectedWork(projects) {
  return createSection({ id: "work", title: "Selected work" }, [
    createElement("p", { className: "section__intro", text: ENTERPRISE_DISCLOSURE }),
    createElement("ul", { className: "project-grid" }, projects.map(renderProjectCard)),
  ]);
}
