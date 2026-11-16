import { createElement } from "./dom.js";

export function renderFooter(name) {
  return createElement("p", {
    className: "site-footer__text",
    text: `© ${new Date().getFullYear()} ${name}`,
  });
}
