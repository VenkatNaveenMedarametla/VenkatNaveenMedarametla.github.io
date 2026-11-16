import {
  FORM_MESSAGES,
  FORM_STATUS,
  PLACEHOLDER_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from "../constants.js";

const SUBMIT_BUTTON_SELECTOR = 'button[type="submit"]';

function showStatus(statusElement, state, message) {
  statusElement.dataset.state = state;
  statusElement.textContent = message;
}

function buildPayload(form, accessKey) {
  const formData = new FormData(form);
  const name = String(formData.get("name")).trim();
  return {
    access_key: accessKey,
    name,
    email: formData.get("email"),
    message: formData.get("message"),
    subject: `${FORM_MESSAGES.subjectPrefix}${name}`,
  };
}

async function sendToWeb3Forms(payload) {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
}

export function initContactForm({ form, statusElement, accessKey }) {
  const submitButton = form.querySelector(SUBMIT_BUTTON_SELECTOR);
  const isConfigured = Boolean(accessKey) && accessKey !== PLACEHOLDER_ACCESS_KEY;

  if (!isConfigured) {
    submitButton.disabled = true;
    showStatus(statusElement, FORM_STATUS.ERROR, FORM_MESSAGES.notConfigured);
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    submitButton.disabled = true;
    showStatus(statusElement, FORM_STATUS.SENDING, FORM_MESSAGES.sending);

    try {
      await sendToWeb3Forms(buildPayload(form, accessKey));
      form.reset();
      showStatus(statusElement, FORM_STATUS.SUCCESS, FORM_MESSAGES.success);
    } catch {
      showStatus(statusElement, FORM_STATUS.ERROR, FORM_MESSAGES.error);
    } finally {
      submitButton.disabled = false;
    }
  });
}
