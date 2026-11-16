import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderLeadershipItem({ role, period, description, organization }) {
  return createElement("details", { className: "leadership-item disclosure" }, [
    createElement("summary", { className: "disclosure__summary" }, [
      createElement("div", { className: "leadership-item__heading" }, [
        createElement("h3", { className: "leadership-item__role", text: role }),
        period && createElement("span", { className: "leadership-item__period", text: period }),
        renderOrganization(organization),
      ]),
    ]),
    description && createElement("p", { className: "leadership-item__description", text: description }),
  ]);
}

export function renderLeadership(items) {
  return createSection({ id: "leadership", title: "Leadership & Volunteering" }, [
    createElement("div", { className: "leadership-list" }, items.map(renderLeadershipItem)),
  ]);
}
