import { createElement, createSection } from "./dom.js";
import { renderAbout } from "./about.js";
import { renderRecognition } from "./awards.js";
import { renderCredentials } from "./credentials.js";
import { renderExpertise } from "./expertise.js";
import { renderLeadership } from "./leadership.js";

function archiveEntry(section, description) {
  const heading = section.querySelector("h2");
  const summary = createElement("summary", { className: "background-entry__summary" }, [
    createElement("span", { className: "background-entry__title", text: heading.textContent }),
    createElement("span", { className: "background-entry__description", text: description }),
  ]);
  heading.remove();
  return createElement("details", { id: section.id, className: "background-entry" }, [
    summary,
    createElement("div", { className: "background-entry__body" }, [...section.children]),
  ]);
}

export function renderBackground(profile) {
  return createSection({ id: "background", title: "Background" }, [
    createElement("div", { className: "background-index" }, [
      archiveEntry(renderAbout(profile.about), "From property search to AI integration"),
      archiveEntry(renderExpertise(profile.expertise, profile.dailyTools), "Node.js, Salesforce, search and cloud delivery"),
      archiveEntry(renderCredentials(profile), "GITAM, Salesforce and Anthropic"),
      archiveEntry(renderRecognition(profile.academicAndVolunteerAwards, profile.professionalAwards), "Berkadia, GITAM and National Service Scheme"),
      archiveEntry(renderLeadership(profile.professionalContributions, profile.leadership), "JavaScript training and student volunteering"),
    ]),
  ]);
}
