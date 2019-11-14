export function escapeSpecialChars(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function html2Element(html: string) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstElementChild;
}

export function element(strings: TemplateStringsArray, ...values: string[]) {
  const htmlString = strings.reduce((result, str, i) => {
    const value = values[i - 1];

    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
  return html2Element(htmlString);
}

export function render(bodyElement: Element, containerElement: HTMLElement) {
  containerElement.innerHTML = "";
  containerElement.appendChild(bodyElement);
}
