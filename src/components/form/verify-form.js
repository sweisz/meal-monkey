export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  //   const input = document.createElement("input");
  //   input.setAttribute("type", "password");
  //   input.setAttribute("placeholder", "*");

  const button = document.createElement("button");
  button.innerText = "Register";
  button.className = "btn";

  function next() {
    alert("NEXT");
  }
  button.addEventListener("click", next);

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your mobile.";

  const infoText = document.createElement("p");
  infoText.innerText =
    "Please check your mobile number ... Continue to reset your password.";

  form.append(title, infoText);

  for (let i = 0; i < 4; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "password");
    input.setAttribute("placeholder", "*");
    input.classList.add("otpPass");
    form.append(input);
  }
  form.append(button);

  const infoText = document.createElement("p");
  infoText.innerText = "Did not receive? Click here.";

  return form;
}
