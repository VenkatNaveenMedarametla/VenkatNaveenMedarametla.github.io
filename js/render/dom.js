export function createElement(tagName, { id, className, text, attributes = {} } = {}, children = []) {
  const element = document.createElement(tagName);
  if (id) element.id = id;
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
  element.append(...children.flat().filter(Boolean));
  return element;
}

export function createList(items, { className } = {}) {
  return createElement(
    "ul",
    { className },
    items.map((item) => createElement("li", { text: item })),
  );
}

export function createExternalLink(text, href, className) {
  return createElement("a", {
    className,
    text,
    attributes: { href, target: "_blank", rel: "noopener noreferrer" },
  });
}

export function createSection({ id, title }, children = []) {
  const heading = createElement("h2", {
    id: `${id}-title`,
    className: "section__title",
    text: title,
  });
  return createElement(
    "section",
    { id, className: "section", attributes: { "aria-labelledby": heading.id } },
    [heading, children],
  );
}
