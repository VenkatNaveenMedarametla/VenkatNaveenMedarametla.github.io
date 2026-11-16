import { REDUCED_MOTION_QUERY } from "../constants.js";

const IN_PAGE_LINK_SELECTOR = 'a[href^="#"]';

export function initSmoothScroll() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest(IN_PAGE_LINK_SELECTOR);
    if (!link) return;

    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;

    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  });
}
