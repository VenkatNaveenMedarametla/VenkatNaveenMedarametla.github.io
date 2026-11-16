import { NAV_OPEN_CLASS } from "../constants.js";

export function initMobileNav({ toggleButton, header }) {
  const setNavOpen = (isOpen) => {
    header.classList.toggle(NAV_OPEN_CLASS, isOpen);
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  };

  toggleButton.addEventListener("click", () => {
    setNavOpen(!header.classList.contains(NAV_OPEN_CLASS));
  });

  header.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setNavOpen(false);
    }
  });
}
