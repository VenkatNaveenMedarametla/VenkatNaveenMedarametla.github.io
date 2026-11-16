import { createElement, createExternalLink } from "./dom.js";

const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

const NAV_LINK_CLASS = "site-nav__link";

export function renderNavItems(links) {
  const sectionItems = NAV_SECTIONS.map(({ id, label }) =>
    createElement("li", {}, [
      createElement("a", {
        className: NAV_LINK_CLASS,
        text: label,
        attributes: { href: `#${id}` },
      }),
    ]),
  );
  const githubItem = createElement("li", {}, [
    createExternalLink("GitHub", links.github, NAV_LINK_CLASS),
  ]);
  return [...sectionItems, githubItem];
}
