import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

const ALL_FILTER_KEY = "all";
const DEFAULT_FILTER_KEY = "nss";
const FILTER_OPTIONS = [
  { key: DEFAULT_FILTER_KEY, label: "NSS" },
  { key: ALL_FILTER_KEY, label: "All" },
];

function renderLeadershipItem({ role, period, description, organization }) {
  return createElement("li", { className: "leadership-item" }, [
    createElement("h3", { className: "leadership-item__role", text: role }),
    period && createElement("p", { className: "leadership-item__period", text: period }),
    description && createElement("p", { className: "leadership-item__description", text: description }),
    renderOrganization(organization),
  ]);
}

function matchesFilter(itemFilterKey, activeFilterKey) {
  return activeFilterKey === ALL_FILTER_KEY || itemFilterKey === activeFilterKey;
}

export function renderLeadership(items) {
  const entries = items.map((item) => ({
    filterKey: item.filterKey,
    element: renderLeadershipItem(item),
  }));

  const options = FILTER_OPTIONS.map(({ key, label }) => ({
    key,
    element: createElement("button", {
      className: "segmented__option",
      text: label,
      attributes: { type: "button" },
    }),
  }));

  const selectFilter = (activeFilterKey) => {
    for (const entry of entries) {
      entry.element.hidden = !matchesFilter(entry.filterKey, activeFilterKey);
    }
    for (const option of options) {
      option.element.setAttribute("aria-pressed", String(option.key === activeFilterKey));
    }
  };

  for (const option of options) {
    option.element.addEventListener("click", () => selectFilter(option.key));
  }
  selectFilter(DEFAULT_FILTER_KEY);

  const filter = createElement(
    "div",
    { className: "segmented", attributes: { role: "group", "aria-label": "Filter leadership entries" } },
    options.map((option) => option.element),
  );

  return createSection({ id: "leadership", title: "Leadership & Volunteering" }, [
    filter,
    createElement("ul", { className: "leadership-list" }, entries.map((entry) => entry.element)),
  ]);
}
