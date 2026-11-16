import { createElement, createExternalLink, createSection } from "./dom.js";

const CONTACT_DESCRIPTION =
  "Connect with me about engineering, enterprise AI, or collaboration.";

export function renderContact({ links }) {
  return createSection({ id: "contact", title: "Let's build something useful." }, [
    createElement("p", { className: "lead", text: CONTACT_DESCRIPTION }),
    createElement("ul", { className: "contact-links" }, [
      createElement("li", {}, [createExternalLink("LinkedIn", links.linkedin, "btn btn--ghost")]),
      createElement("li", {}, [createExternalLink("GitHub", links.github, "btn btn--ghost")]),
    ]),
  ]);
}
