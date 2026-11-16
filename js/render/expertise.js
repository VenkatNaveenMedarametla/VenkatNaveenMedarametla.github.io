import { createElement, createList, createSection } from "./dom.js";

function renderExpertiseGroup({ category, items }) {
  return createElement("article", { className: "expertise-group" }, [
    createElement("h3", { className: "expertise-group__title", text: category }),
    createList(items, { className: "chips" }),
  ]);
}

function renderDailyTools(tools) {
  return createElement("p", { className: "daily-tools" }, [
    createElement("span", { className: "daily-tools__label", text: "Daily tools" }),
    createElement("span", { className: "daily-tools__items", text: tools.join(" · ") }),
  ]);
}

export function renderExpertise(groups, dailyTools) {
  return createSection({ id: "expertise", title: "Expertise" }, [
    createElement("div", { className: "expertise-grid" }, groups.map(renderExpertiseGroup)),
    renderDailyTools(dailyTools),
  ]);
}
