import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderLeadershipItem({ role, period, description, organization }) {
  return createElement("li", { className: "leadership-item" }, [
    createElement("h3", { className: "leadership-item__role", text: role }),
    period && createElement("p", { className: "leadership-item__period", text: period }),
    description && createElement("p", { className: "leadership-item__description", text: description }),
    renderOrganization(organization),
  ]);
}

export function renderLeadership(items) {
  return createSection({ id: "leadership", title: "Leadership & Volunteering" }, [
    createElement("ul", { className: "leadership-list" }, items.map(renderLeadershipItem)),
  ]);
}
