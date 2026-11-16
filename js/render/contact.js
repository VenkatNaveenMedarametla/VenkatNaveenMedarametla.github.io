import { createElement, createExternalLink, createSection } from "./dom.js";

function renderFormField({ id, label, control = "input", attributes }) {
  return createElement("div", { className: "form-field" }, [
    createElement("label", {
      className: "form-field__label",
      text: label,
      attributes: { for: id },
    }),
    createElement(control, {
      id,
      className: "form-field__control",
      attributes: { ...attributes, required: "" },
    }),
  ]);
}

function renderContactForm() {
  return createElement("form", { id: "contact-form", className: "contact-form" }, [
    renderFormField({
      id: "contact-name",
      label: "Name",
      attributes: { name: "name", type: "text", autocomplete: "name" },
    }),
    renderFormField({
      id: "contact-email",
      label: "Email",
      attributes: { name: "email", type: "email", autocomplete: "email" },
    }),
    renderFormField({
      id: "contact-message",
      label: "Message",
      control: "textarea",
      attributes: { name: "message" },
    }),
    createElement("button", {
      className: "btn btn--primary",
      text: "Send message",
      attributes: { type: "submit" },
    }),
    createElement("p", {
      id: "contact-status",
      className: "form-status",
      attributes: { role: "status", "aria-live": "polite" },
    }),
  ]);
}

export function renderContact({ contactForm, links }) {
  return createSection({ id: "contact", title: "Contact" }, [
    createElement("p", { className: "lead", text: contactForm.intro }),
    renderContactForm(),
    createElement("ul", { className: "contact-links" }, [
      createElement("li", {}, [createExternalLink("LinkedIn", links.linkedin, "btn btn--ghost")]),
      createElement("li", {}, [createExternalLink("GitHub", links.github, "btn btn--ghost")]),
    ]),
  ]);
}
