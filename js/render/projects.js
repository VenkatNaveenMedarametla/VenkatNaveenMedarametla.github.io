import { createElement, createList, createSection } from "./dom.js";

function renderProjectCard({ name, description, tags }) {
  return createElement("article", { className: "card" }, [
    createElement("h3", { className: "card__title", text: name }),
    createElement("p", { className: "card__text", text: description }),
    createList(tags, { className: "chips" }),
  ]);
}

export function renderProjects(projects) {
  return createSection({ id: "projects", title: "Projects" }, [
    createElement("div", { className: "card-grid" }, projects.map(renderProjectCard)),
  ]);
}
