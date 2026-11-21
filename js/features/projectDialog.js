import { PROJECT_DIALOG_TITLE_ID, PROJECT_TRIGGER_SELECTOR } from "../constants.js";
import { createElement } from "../render/dom.js";
import { renderProjectDetails } from "../render/projectDetails.js";

export function initProjectDialog(projects) {
  const dialog = createElement("dialog", {
    className: "project-dialog",
    attributes: { "aria-labelledby": PROJECT_DIALOG_TITLE_ID },
  });
  document.body.append(dialog);

  const byHash = new Map(projects.map(project => [`#project-${project.id}`, project]));
  let trigger;
  let activeHash;

  function syncDialog() {
    const project = byHash.get(location.hash);
    if (!project) {
      if (dialog.open) dialog.close();
      return;
    }
    activeHash = location.hash;
    dialog.replaceChildren(...renderProjectDetails(project));
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    dialog.querySelector("h2").focus();
  }

  document.addEventListener("click", event => {
    const link = event.target.closest(PROJECT_TRIGGER_SELECTOR);
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger = link;
    history.pushState({ portfolioProject: link.hash }, "", link.hash);
    syncDialog();
  });

  dialog.addEventListener("close", () => {
    if (dialog.open) return;
    if (location.hash === activeHash) {
      if (history.state?.portfolioProject === activeHash) history.back();
      else history.replaceState(null, "", "#work");
    }
    const fallback = document.querySelector(`#work a[href="${activeHash}"]`);
    (trigger?.isConnected ? trigger : fallback)?.focus();
    trigger = null;
  });

  window.addEventListener("hashchange", syncDialog);
  syncDialog();
}
