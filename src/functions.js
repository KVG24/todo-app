function createDOMElement(elementName, element, className, id, text) {
  elementName = document.createElement(element);
  if (className) {
    elementName.classList.add(className);
  }
  if (id) {
    elementName.setAttribute("id", id);
  }
  if (text) {
    elementName.textContent = text;
  }
}
