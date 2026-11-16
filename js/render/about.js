import { createElement, createList, createSection } from "./dom.js";

export function renderAbout({ summary, focusAreas }) {
  return createSection({ id: "about", title: "About" }, [
    createElement("div", { className: "about-layout" }, [
      createElement(
        "div",
        { className: "about-copy" },
        summary.map((paragraph) => createElement("p", { className: "lead", text: paragraph })),
      ),
      createElement("div", { className: "about-focus" }, [
        createElement("h3", { className: "subheading", text: "Current focus" }),
        createList(focusAreas, { className: "focus-list" }),
      ]),
    ]),
  ]);
}
