import { createElement, createList, createSection } from "./dom.js";

function renderSkillGroup({ category, items }) {
  return createElement("article", { className: "skill-group" }, [
    createElement("h3", { className: "skill-group__title", text: category }),
    createList(items, { className: "chips" }),
  ]);
}

export function renderSkills(skillGroups) {
  return createSection({ id: "skills", title: "Skills" }, [
    createElement("div", { className: "skill-grid" }, skillGroups.map(renderSkillGroup)),
  ]);
}
