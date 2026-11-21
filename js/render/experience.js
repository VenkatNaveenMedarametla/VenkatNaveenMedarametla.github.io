import { createElement, createList, createSection } from "./dom.js";
import { PROJECT_TRIGGER_ATTRIBUTE } from "../constants.js";
import { renderOrganization } from "./organization.js";

function hasHighlights(role) {
  return role.highlights.length > 0;
}

function renderRoleHeading({ title, period, workMode, scope }) {
  return createElement("div", { className: "timeline__heading" }, [
    createElement("h4", { className: "timeline__title", text: title }),
    createElement("p", { className: "timeline__meta", text: `${period} · ${workMode}` }),
    createElement("p", { className: "role-scope", text: scope }),
  ]);
}

function renderStaticTimelineItem(role) {
  return createElement("li", { className: "timeline__item" }, [renderRoleHeading(role)]);
}

function renderDisclosureTimelineItem(role, isExpandedByDefault) {
  return createElement("li", { className: "timeline__item" }, [
    createElement(
      "details",
      { className: "timeline__details", attributes: isExpandedByDefault ? { open: "" } : {} },
      [
        createElement("summary", { className: "disclosure__summary" }, [renderRoleHeading(role)]),
        createList(role.highlights, { className: "checklist" }),
        role.project && createElement("a", {
          className: "project-card__action",
          text: role.project.label,
          attributes: { href: `#project-${role.project.id}`, "aria-haspopup": "dialog", [PROJECT_TRIGGER_ATTRIBUTE]: role.project.id },
        }),
      ],
    ),
  ]);
}

function renderTimeline(roles) {
  const expandedRoleIndex = roles.findIndex(hasHighlights);
  return createElement(
    "ol",
    { className: "timeline" },
    roles.map((role, index) =>
      hasHighlights(role)
        ? renderDisclosureTimelineItem(role, index === expandedRoleIndex)
        : renderStaticTimelineItem(role),
    ),
  );
}

function renderCompany({ organization, summary, location, roles }) {
  return createElement("article", { className: "company" }, [
    createElement("header", { className: "company__header" }, [
      createElement("h3", { className: "company__name" }, [renderOrganization(organization)]),
      createElement("p", { className: "company__summary", text: summary }),
      createElement("p", { className: "company__meta", text: location }),
    ]),
    renderTimeline(roles),
  ]);
}

export function renderExperience(companies) {
  return createSection(
    { id: "experience", title: "Experience" },
    companies.map(renderCompany),
  );
}
