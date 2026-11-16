import { createList, createSection } from "./dom.js";

export function renderLeadership(items) {
  return createSection({ id: "leadership", title: "Leadership & Volunteering" }, [
    createList(items, { className: "checklist" }),
  ]);
}
