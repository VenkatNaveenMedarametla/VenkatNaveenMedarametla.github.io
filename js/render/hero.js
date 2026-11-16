import { createElement } from "./dom.js";

// Experience periods are written as text ("Feb 2019 – Jul 2021"), so the earliest year is read from the first four-digit match.
const YEAR_PATTERN = /\d{4}/;
const CURRENT_YEAR = new Date().getFullYear();

function earliestExperienceYear(companies) {
  const startYears = companies.flatMap((company) =>
    company.roles.map((role) => Number(role.period.match(YEAR_PATTERN)[0])),
  );
  return Math.min(...startYears);
}

function renderStat({ label, value }) {
  return createElement("div", { className: "hero__stat" }, [
    createElement("dt", { className: "hero__stat-label", text: label }),
    createElement("dd", { className: "hero__stat-value", text: value }),
  ]);
}

function renderStats({ experience, certifications, awards }) {
  const yearsInSoftware = CURRENT_YEAR - earliestExperienceYear(experience);
  const stats = [
    { label: "Years in software", value: `${yearsInSoftware}+` },
    { label: "Certifications", value: String(certifications.length) },
    { label: "Awards & recognition", value: String(awards.length) },
  ];

  return createElement("dl", { className: "hero__stats" }, stats.map(renderStat));
}

export function renderHero(profile) {
  const { name, title, location, tagline, photo, links } = profile;

  const actions = createElement("div", { className: "hero__actions" }, [
    createElement("a", {
      className: "btn btn--primary",
      text: "View experience",
      attributes: { href: "#experience" },
    }),
    createElement("a", {
      className: "btn btn--ghost",
      text: "Download resume",
      attributes: { href: links.resume, download: "" },
    }),
    createElement("a", {
      className: "btn btn--ghost",
      text: "Contact me",
      attributes: { href: "#contact" },
    }),
  ]);

  const copy = createElement("div", { className: "hero__copy" }, [
    createElement("p", { className: "hero__eyebrow", text: location }),
    createElement("h1", { className: "hero__name", text: name }),
    createElement("p", { className: "hero__title", text: title }),
    createElement("p", { className: "hero__tagline", text: tagline }),
    actions,
    renderStats(profile),
  ]);

  const media = createElement("div", { className: "hero__media" }, [
    createElement("img", {
      className: "hero__photo",
      attributes: { src: photo, alt: `Portrait of ${name}` },
    }),
  ]);

  return createElement("section", { id: "hero", className: "hero" }, [copy, media]);
}
