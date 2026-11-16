import { profile } from "../data/profile.js";
import { renderAbout } from "./render/about.js";
import { renderAwards } from "./render/awards.js";
import { renderContact } from "./render/contact.js";
import { renderEducation } from "./render/education.js";
import { renderExperience } from "./render/experience.js";
import { renderFooter } from "./render/footer.js";
import { renderHero } from "./render/hero.js";
import { renderNavItems } from "./render/header.js";
import { renderLeadership } from "./render/leadership.js";
import { renderProjects } from "./render/projects.js";
import { renderSkills } from "./render/skills.js";
import { initContactForm } from "./features/contactForm.js";
import { initMobileNav } from "./features/mobileNav.js";
import { initSmoothScroll } from "./features/smoothScroll.js";
import { initThemeToggle } from "./features/themeToggle.js";

function renderPage() {
  document.getElementById("brand").textContent = profile.shortName;
  document.getElementById("main-content").replaceChildren(
    renderHero(profile),
    renderAbout(profile.about),
    renderExperience(profile.experience),
    renderProjects(profile.projects),
    renderSkills(profile.skills),
    renderEducation(profile.education),
    renderAwards(profile.awards),
    renderLeadership(profile.leadership),
    renderContact(profile),
  );
  document.getElementById("site-nav").replaceChildren(...renderNavItems(profile.links));
  document.getElementById("site-footer").replaceChildren(renderFooter(profile.name));
}

function initInteractions() {
  initThemeToggle(document.getElementById("theme-toggle"));
  initMobileNav({
    toggleButton: document.getElementById("nav-toggle"),
    header: document.querySelector(".site-header"),
  });
  initSmoothScroll();
  initContactForm({
    form: document.getElementById("contact-form"),
    statusElement: document.getElementById("contact-status"),
    accessKey: profile.contactForm.web3formsAccessKey,
  });
}

renderPage();
initInteractions();
