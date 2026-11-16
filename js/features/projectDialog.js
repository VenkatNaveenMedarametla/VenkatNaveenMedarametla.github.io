import { PROJECT_DIALOG_TITLE_ID, PROJECT_TRIGGER_ATTRIBUTE, PROJECT_TRIGGER_SELECTOR } from "../constants.js";
import { createElement } from "../render/dom.js";
import { renderProjectDetails } from "../render/projectDetails.js";

export function initProjectDialog(projects) {
  const dialog = createElement("dialog", {
    className: "project-dialog",
    attributes: { "aria-labelledby": PROJECT_DIALOG_TITLE_ID },
  });

  let triggerElement = null;

  dialog.addEventListener("close", () => {
    triggerElement?.focus();
    triggerElement = null;
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(PROJECT_TRIGGER_SELECTOR);
    if (!trigger) return;

    const project = projects.find(({ id }) => id === trigger.getAttribute(PROJECT_TRIGGER_ATTRIBUTE));
    if (!project?.details) return;

    triggerElement = trigger;
    dialog.replaceChildren(...renderProjectDetails(project));
    dialog.showModal();
  });

  document.body.append(dialog);
}
