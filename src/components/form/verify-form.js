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

  // this Function creates a input
  function createOTPInputElement() {
    const input = document.createElement("input");
    input.type = "password";
    input.placeholder = "*";
    input.className = "input";
    return input;
  }

  // Create variables via function
  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const otpFour = createOTPInputElement();

  // Create the container DIV for OTP Password or PIN
  const passwordContainer = document.createElement("div");
  passwordContainer.className = "form__otp";
  passwordContainer.append(otpOne, otpTwo, otpThree, otpFour);

  form.append(title, passwordContainer, infoText);

  // for (let i = 0; i < 4; i++) {
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "password");
  //   input.setAttribute("placeholder", "*");
  //   input.classList.add("otpPass");
  //   form.append(input);
  // }

  form.append(button);

  // Hint +Link under the button
  const hint = document.createElement("p");
  hint.innerText = "Didn't Receive?";
  hint.className = "form__hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click Here";
  resendLink.href = "#";

  form.append(hint);
  hint.append(resendLink);

  return form;
}
