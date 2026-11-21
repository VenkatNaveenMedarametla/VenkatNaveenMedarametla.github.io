import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

function renderEntry({ role, period, description, organization }) {
  return createElement("li", { className: "leadership-entry" }, [
    createElement("h4", { className: "leadership-item__role", text: role }),
    organization && createElement("p", { className: "leadership-item__org" }, [renderOrganization(organization)]),
    period && createElement("p", { className: "leadership-item__period", text: period }),
    description && createElement("p", { className: "leadership-item__description", text: description }),
  ]);
}

export function renderLeadership(contributions, roles) {
  return createSection({ id: "leadership", title: "Leadership & volunteering" }, [
    createElement("h3", { className: "subheading", text: "Professional contributions" }),
    createElement("ul", { className: "leadership-list" }, contributions.map(renderEntry)),
    createElement("h3", { className: "subheading", text: "Leadership roles" }),
    createElement("ul", { className: "leadership-list" }, roles.map(renderEntry)),
  ]);
}
