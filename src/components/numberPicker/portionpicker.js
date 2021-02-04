import { createElement } from "../../utils/createElement";

export function createPortionPicker() {
  const subtrcatButton = createElement("button", {
    innerText: "-",
    className: "btn-filled",
    onclick: function () {
      // Change a string to a integer => Number(portionInput.value) or +portionInput.value
      portionInput.value = +portionInput.value - 1;
    },
  });

  const portionInput = createElement("input", {
    type: "number",
    value: "0",
    min: "0",
  });

  const addButton = createElement("button", {
    innerText: "+",
    className: "btn-filled",
    onclick: function () {
      portionInput.value = Number(portionInput.value) + 1;
    },
  });

  // Create all Elements in a DIV Tag
  return createElement("div", {
    className: "portionPicker",
    children: [
      createElement("p", {
        innerText: "Number of Portions",
      }),
      subtrcatButton,
      portionInput,
      addButton,
    ],
  });
}
