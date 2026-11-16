import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

const PROFESSIONAL_HEADING = "Professional contributions";
const ROLES_HEADING = "Leadership roles";

function renderRoleHeading({ role, period, organization }) {
  return createElement("div", { className: "leadership-item__heading" }, [
    createElement("h4", { className: "leadership-item__role", text: role }),
    organization && createElement("p", { className: "leadership-item__org" }, [renderOrganization(organization)]),
    period && createElement("p", { className: "leadership-item__period", text: period }),
  ]);
}

function renderContribution({ role, description }) {
  return createElement("li", { className: "leadership-entry" }, [
    createElement("h4", { className: "leadership-item__role", text: role }),
    createElement("p", { className: "leadership-item__description", text: description }),
  ]);
}

function renderLeadershipRole(item) {
  if (!item.description) {
    return createElement("li", { className: "leadership-entry" }, [renderRoleHeading(item)]);
  }

  return createElement("li", { className: "leadership-entry" }, [
    createElement("details", { className: "disclosure" }, [
      createElement("summary", { className: "disclosure__summary" }, [renderRoleHeading(item)]),
      createElement("p", { className: "leadership-item__description", text: item.description }),
    ]),
  ]);
}

export function renderLeadership(contributions, roles) {
  return createSection({ id: "leadership", title: "Leadership & Volunteering" }, [
    createElement("h3", { className: "subheading", text: PROFESSIONAL_HEADING }),
    createElement("ul", { className: "leadership-list" }, contributions.map(renderContribution)),
    createElement("h3", { className: "subheading", text: ROLES_HEADING }),
    createElement("ul", { className: "leadership-list" }, roles.map(renderLeadershipRole)),
  ]);
}
