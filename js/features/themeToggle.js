import { THEME, THEME_STORAGE_KEY } from "../constants.js";

function readStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (for example in private browsing); the theme still applies for this visit.
  }
}

function resolveInitialTheme() {
  const storedTheme = readStoredTheme();
  if (storedTheme === THEME.LIGHT || storedTheme === THEME.DARK) {
    return storedTheme;
  }
  return THEME.LIGHT;
}

function applyTheme(theme, toggleButton) {
  document.documentElement.dataset.theme = theme;
  toggleButton.setAttribute("aria-pressed", String(theme === THEME.LIGHT));
}

export function initThemeToggle(toggleButton) {
  applyTheme(resolveInitialTheme(), toggleButton);

  toggleButton.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    applyTheme(nextTheme, toggleButton);
    writeStoredTheme(nextTheme);
  });
}
