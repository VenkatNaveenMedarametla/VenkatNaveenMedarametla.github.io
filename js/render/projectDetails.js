import { PROJECT_DIALOG_TITLE_ID } from "../constants.js";
import { createElement, createList } from "./dom.js";

function renderDetailSection(label, content) {
  return createElement("section", { className: "project-dialog__section" }, [
    createElement("h3", { className: "project-dialog__label", text: label }),
    content,
  ]);
}

export function renderProjectDetails({ title, summary, technologies, details }) {
  const { context, highlights } = details;

  return [
    createElement("h2", {
      id: PROJECT_DIALOG_TITLE_ID,
      className: "project-dialog__title",
      text: title,
    }),
    createElement("p", { className: "project-dialog__summary", text: summary }),
    context && renderDetailSection("Context", createElement("p", { text: context })),
    highlights?.length > 0 &&
      renderDetailSection("What I built", createList(highlights, { className: "checklist" })),
    renderDetailSection("Technologies", createList(technologies, { className: "chips" })),
    createElement("form", { className: "project-dialog__footer", attributes: { method: "dialog" } }, [
      createElement("button", {
        className: "btn btn--ghost",
        text: "Close",
        attributes: { type: "submit" },
      }),
    ]),
  ].filter(Boolean);
}
