import { createElement } from "../../utils/createElement";

function createInputElement() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    maxlength: 1,
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {
  const inputElement1 = createInputElement();
  const inputElement2 = createInputElement();
  const inputElement3 = createInputElement();
  const inputElement4 = createInputElement();

  const messageElement = createElement("p", {
    className: "message",
    innerText: " ",
  });

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      messageElement,
      createElement("div", {
        className: "form__otp",
        children: [inputElement1, inputElement2, inputElement3, inputElement4],
      }),
      createElement("input", {
        type: "submit",
        innerText: "Next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "Didn't Receive?",
        className: "form__hint",
        children: [
          createElement("a", {
            innerText: "Click here!",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputElement1.value +
        inputElement2.value +
        inputElement3.value +
        inputElement4.value;
      if (password === "1234") {
        messageElement.innerText = "";
        // alert("Welcome!");
      } else {
        // alert("You are not permitted!");
        messageElement.innerText = "You are not permitted!";
      }
    },
  });
}
