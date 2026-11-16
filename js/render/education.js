import { createElement, createSection } from "./dom.js";

function renderEducationItem({ degree, school, period, grade }) {
  return createElement("article", { className: "education-item" }, [
    createElement("h3", { className: "card__title", text: degree }),
    createElement("p", { className: "education-item__school", text: school }),
    createElement("p", { className: "education-item__meta", text: `${period} · ${grade}` }),
  ]);
}

export function renderEducation(entries) {
  return createSection(
    { id: "education", title: "Education" },
    entries.map(renderEducationItem),
  );
}
