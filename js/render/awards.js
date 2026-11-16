import { createElement, createSection } from "./dom.js";

function renderAward({ title, year, note }) {
  return createElement("li", { className: "award" }, [
    createElement("h3", { className: "award__title", text: title }),
    year && createElement("p", { className: "award__year", text: year }),
    note && createElement("p", { className: "award__note", text: note }),
  ]);
}

export function renderAwards(awards) {
  return createSection({ id: "awards", title: "Awards & Recognition" }, [
    createElement("ul", { className: "awards-list" }, awards.map(renderAward)),
  ]);
}
