import { createElement } from "./dom.js";

export function renderHero({ name, title, location, tagline, photo, links }) {
  const actions = createElement("div", { className: "hero__actions" }, [
    createElement("a", {
      className: "btn btn--primary",
      text: "View experience",
      attributes: { href: "#experience" },
    }),
    createElement("a", {
      className: "btn btn--ghost",
      text: "Download resume",
      attributes: { href: links.resume, download: "" },
    }),
    createElement("a", {
      className: "btn btn--ghost",
      text: "Contact me",
      attributes: { href: "#contact" },
    }),
  ]);

  const copy = createElement("div", { className: "hero__copy" }, [
    createElement("p", { className: "hero__eyebrow", text: location }),
    createElement("h1", { className: "hero__name", text: name }),
    createElement("p", { className: "hero__title", text: title }),
    createElement("p", { className: "hero__tagline", text: tagline }),
    actions,
  ]);

  const media = createElement("div", { className: "hero__media" }, [
    createElement("img", {
      className: "hero__photo",
      attributes: { src: photo, alt: `Portrait of ${name}` },
    }),
  ]);

  return createElement("section", { id: "hero", className: "hero" }, [copy, media]);
}
