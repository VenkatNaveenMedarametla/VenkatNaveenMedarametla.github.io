import { NAV_OPEN_CLASS } from "../constants.js";

export function initMobileNav({ toggleButton, header }) {
  const isNavOpen = () => header.classList.contains(NAV_OPEN_CLASS);

  const setNavOpen = (isOpen) => {
    header.classList.toggle(NAV_OPEN_CLASS, isOpen);
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  };

  toggleButton.addEventListener("click", () => {
    setNavOpen(!isNavOpen());
  });

  header.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setNavOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !isNavOpen()) return;
    setNavOpen(false);
    toggleButton.focus();
  });
}
