import { PROJECT_TRIGGER_ATTRIBUTE } from "../constants.js";
import { createElement, createExternalLink, createList, createSection } from "./dom.js";

const INTERACTIVE_CARD_CLASS = "project-card project-card--interactive";
const STATIC_CARD_CLASS = "project-card";

function renderExploreAction({ id, title }) {
  return createElement("a", {
    className: "project-card__action",
    text: "Read project notes",
    attributes: {
      href: `#project-${id}`,
      "aria-label": `Read project notes on ${title}`,
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
    createElement("div", { className: "project-links" }, [
      details && renderExploreAction(project),
      project.sourceUrl && createExternalLink("GitHub source", project.sourceUrl, "project-card__action"),
    ]),
  ]);
}

export function renderSelectedWork(projects) {
  return createSection({ id: "work", title: "Selected work" }, [
    createElement("ul", { className: "project-grid" }, projects.map(renderProjectCard)),
  ]);
}
