import { createElement } from "./dom.js";
import { hasPartialYearSince, yearsSince } from "../util/dates.js";

const PORTRAIT_PIXELS = 1080;
const PORTRAIT_SMALL_PIXELS = 800;
const PORTRAIT_SIZES = "(max-width: 768px) 258px, 381px";
const LABEL_SEPARATOR = " · ";

function formatTenure(years, hasPartialYear) {
  const plusMarker = hasPartialYear ? "+" : "";
  const unit = years === 1 && !hasPartialYear ? "year" : "years";
  return `${years}${plusMarker} ${unit} in software`;
}

function renderActions({ resume }) {
  return createElement("div", { className: "hero__actions" }, [
    createElement("a", {
      className: "btn btn--primary",
      text: "Explore my work",
      attributes: { href: "#work" },
    }),
    createElement("a", {
      className: "btn btn--ghost",
      text: "Download résumé",
      attributes: { href: resume, download: "" },
    }),
    createElement("a", {
        className: "hero__resume",
        text: "Get in touch",
        attributes: { href: "#contact" },
      }),
  ]);
}

export function renderHero(profile) {
  const {
    name,
    title,
    location,
    headlineLines,
    introduction,
    heroLabels,
    photo,
    photoSmall,
    links,
    careerStartDate,
  } = profile;
  const tenure = formatTenure(yearsSince(careerStartDate), hasPartialYearSince(careerStartDate));

  const copy = createElement("div", { className: "hero__copy" }, [
    createElement("p", { className: "hero__name", text: name }),
    createElement("p", { className: "hero__meta", text: `${title} · ${location} · ${tenure}` }),
    createElement(
      "h1",
      { className: "hero__headline" },
      headlineLines.map((line) => createElement("span", { text: line })),
    ),
    createElement("p", { className: "hero__description", text: introduction }),
    createElement("p", { className: "hero__labels", text: heroLabels.join(LABEL_SEPARATOR) }),
    renderActions(links),
  ]);

  const media = createElement("div", { className: "hero__media" }, [
    createElement("div", { className: "hero__frame" }, [
      createElement("img", {
        className: "hero__photo",
        attributes: {
          src: photo,
          srcset: `${photoSmall} ${PORTRAIT_SMALL_PIXELS}w, ${photo} ${PORTRAIT_PIXELS}w`,
          sizes: PORTRAIT_SIZES,
          alt: `Portrait of ${name}`,
          width: PORTRAIT_PIXELS,
          height: PORTRAIT_PIXELS,
        },
      }),
    ]),
  ]);

  return createElement("section", { id: "hero", className: "hero" }, [copy, media]);
}
