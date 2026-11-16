import { createElement, createSection } from "./dom.js";
import { renderCertificationGroup } from "./certifications.js";
import { renderEducationItem } from "./education.js";

const CERTIFICATION_GROUP_ORDER = ["AI & MCP", "Salesforce", "Security", "Additional"];

function groupCertifications(certifications) {
  return CERTIFICATION_GROUP_ORDER.map((title) => ({
    title,
    items: certifications.filter((certification) => certification.group === title),
  })).filter((group) => group.items.length > 0);
}

export function renderCredentials({ education, certifications }) {
  return createSection({ id: "credentials", title: "Credentials & Education" }, [
    createElement("h3", { className: "subheading", text: "Education" }),
    createElement("ul", { className: "education-list" }, education.map(renderEducationItem)),
    createElement("h3", { className: "subheading", text: "Certifications" }),
    createElement("div", { className: "certification-groups" }, groupCertifications(certifications).map(renderCertificationGroup)),
  ]);
}
