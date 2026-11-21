import { PROJECT_DIALOG_TITLE_ID } from "../constants.js";
import { createElement, createExternalLink } from "./dom.js";

export function renderProjectDetails({ title, details }) {
  const sections = details.sections.map(({ title, text, link }) =>
    createElement("section", { className: "project-dialog__section" }, [
      createElement("h3", { className: "project-dialog__label", text: title }),
      createElement("p", { text }),
      link && createExternalLink(link.label, link.href, "project-card__action"),
    ]),
  );
  return [
    createElement("p", { className: "project-card__category", text: details.context }),
    createElement("h2", {
      id: PROJECT_DIALOG_TITLE_ID,
      className: "project-dialog__title",
      text: title,
      attributes: { tabindex: "-1" },
    }),
    createElement("p", { className: "project-dialog__summary", text: details.question }),
    ...sections,
    createElement("form", { className: "project-dialog__footer", attributes: { method: "dialog" } }, [
      createElement("button", { className: "btn btn--ghost", text: "Close", attributes: { type: "submit" } }),
    ]),
  ];
}
