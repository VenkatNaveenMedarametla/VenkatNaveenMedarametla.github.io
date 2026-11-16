import { createElement, createSection } from "./dom.js";
import { renderOrganization } from "./organization.js";

const ACADEMIC_HEADING = "Academic & community recognition";
const PROFESSIONAL_HEADING = "Professional recognition";

function renderProfessionalAward({ title, year, note, organization }) {
  return createElement("li", { className: "award" }, [
    createElement("p", { className: "award__year", text: year }),
    createElement("h4", { className: "award__title", text: title }),
    createElement("p", { className: "award__note", text: note }),
    createElement("div", { className: "award__issuer" }, [renderOrganization(organization)]),
  ]);
}

function renderAcademicAward({ title, year, note, organization }) {
  return createElement("li", { className: "award-compact" }, [
    createElement("h4", { className: "award-compact__title", text: title }),
    createElement("p", { className: "award-compact__meta", text: `${year} · ${organization.name}` }),
    createElement("p", { className: "award-compact__note", text: note }),
  ]);
}

function renderProfessionalGroup(awards) {
  return createElement("div", { className: "recognition-group" }, [
    createElement("h3", { className: "recognition-group__title", text: PROFESSIONAL_HEADING }),
    createElement("ul", { className: "awards-list" }, awards.map(renderProfessionalAward)),
  ]);
}

function renderAcademicGroup(awards) {
  return createElement("div", { className: "recognition-group" }, [
    createElement("h3", { className: "recognition-group__title", text: ACADEMIC_HEADING }),
    createElement("ul", { className: "award-compact-list" }, awards.map(renderAcademicAward)),
  ]);
}

export function renderRecognition(academicAndVolunteerAwards, professionalAwards) {
  return createSection({ id: "awards", title: "Recognition" }, [
    renderProfessionalGroup(professionalAwards),
    renderAcademicGroup(academicAndVolunteerAwards),
  ]);
}
