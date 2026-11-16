import { profile } from "../data/profile.js";
import { renderAbout } from "./render/about.js";
import { renderContact } from "./render/contact.js";
import { renderCredentials } from "./render/credentials.js";
import { renderExperience } from "./render/experience.js";
import { renderExpertise } from "./render/expertise.js";
import { renderFooter } from "./render/footer.js";
import { renderHero } from "./render/hero.js";
import { renderNavItems } from "./render/header.js";
import { renderLeadership } from "./render/leadership.js";
import { renderRecognition } from "./render/awards.js";
import { renderSelectedWork } from "./render/work.js";
import { initMobileNav } from "./features/mobileNav.js";
import { initProjectDialog } from "./features/projectDialog.js";
import { initSmoothScroll } from "./features/smoothScroll.js";
import { initThemeToggle } from "./features/themeToggle.js";

function renderPage() {
  document.getElementById("brand").textContent = profile.brandMark;
  document.getElementById("main-content").replaceChildren(
    renderHero(profile),
    renderSelectedWork(profile.projects),
    renderAbout(profile.about),
    renderExperience(profile.experience),
    renderExpertise(profile.expertise, profile.dailyTools),
    renderRecognition(profile.academicAndVolunteerAwards, profile.professionalAwards),
    renderLeadership(profile.professionalContributions, profile.leadership),
    renderCredentials(profile),
    renderContact(profile),
  );
  document.getElementById("site-nav").replaceChildren(...renderNavItems());
  document.getElementById("site-footer").replaceChildren(renderFooter(profile.name));
}

function initInteractions() {
  initThemeToggle(document.getElementById("theme-toggle"));
  initMobileNav({
    toggleButton: document.getElementById("nav-toggle"),
    header: document.querySelector(".site-header"),
  });
  initProjectDialog(profile.projects);
  initSmoothScroll();
}

renderPage();
initInteractions();
