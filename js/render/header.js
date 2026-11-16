import { createElement } from "./dom.js";

const NAV_SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "contact", label: "Contact" },
];

const NAV_LINK_CLASS = "site-nav__link";

export function renderNavItems() {
  return NAV_SECTIONS.map(({ id, label }) =>
    createElement("li", {}, [
      createElement("a", {
        className: NAV_LINK_CLASS,
        text: label,
        attributes: { href: `#${id}` },
      }),
    ]),
  );
}
