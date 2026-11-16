import { createElement, createList, createSection } from "./dom.js";

export function renderAbout({ summary, focusAreas }) {
  return createSection({ id: "about", title: "About" }, [
    createElement("p", { className: "lead", text: summary }),
    createElement("h3", { className: "subheading", text: "Current focus" }),
    createList(focusAreas, { className: "checklist" }),
  ]);
}
