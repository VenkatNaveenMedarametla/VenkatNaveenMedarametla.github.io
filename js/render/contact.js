import { createElement, createExternalLink, createSection } from "./dom.js";

export function renderContact({ links }) {
  return createSection({ id: "contact", title: "Get in touch" }, [
    createElement("p", { className: "contact-copy", text: "Working on Salesforce integrations, search or enterprise AI? I’d love to hear what you’re building." }),
    createElement("ul", { className: "contact-links" }, [
      links.email && createElement("li", {}, [createElement("a", { className: "btn btn--primary", attributes: { href: links.email }, text: "Email me" })]),
      createElement("li", {}, [createExternalLink("Message me on LinkedIn", links.linkedin, "btn btn--ghost")]),
      createElement("li", {}, [createExternalLink("Visit my GitHub", links.github, "btn btn--ghost")]),
      createElement("li", {}, [createElement("a", { className: "contact-resume", attributes: { href: links.resume, download: "" }, text: "Download résumé (PDF)" })]),
    ]),
  ]);
}
