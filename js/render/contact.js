import { createElement, createExternalLink, createSection } from "./dom.js";

export function renderContact({ links }) {
  return createSection({ id: "contact", title: "Contact" }, [
    createElement("ul", { className: "contact-links" }, [
      createElement("li", {}, [createExternalLink("LinkedIn", links.linkedin, "btn btn--ghost")]),
      createElement("li", {}, [createExternalLink("GitHub", links.github, "btn btn--ghost")]),
    ]),
  ]);
}
