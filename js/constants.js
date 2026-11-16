export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

export const LIGHT_SCHEME_QUERY = "(prefers-color-scheme: light)";
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const NAV_OPEN_CLASS = "is-nav-open";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const PLACEHOLDER_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export const FORM_STATUS = Object.freeze({
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
});

export const FORM_MESSAGES = Object.freeze({
  sending: "Sending your message...",
  success: "Thanks! Your message has been sent.",
  error: "Something went wrong. Please try again or reach out on LinkedIn.",
  notConfigured: "The contact form is not configured yet.",
  subjectPrefix: "Portfolio message from ",
});
