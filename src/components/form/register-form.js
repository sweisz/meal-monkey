// export function createRegisterForm() {
//   return `
//       <form class="form">
//         <h2>Reset Password</h2>
//         <p>Please enter your email to receive a link to create a new password via email</p>
//         <input type="text" placeholder="email" />
//         <input type="submit" />
//       </form>
//     `;
// }

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "E-Mail hier eintragen.");
  // input.placeholder = "TEXT HIER!";

  const button = document.createElement("button");

  button.classList.add("btnRegister");
  button.innerText = "Register";

  function register() {
    alert("Registred");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Register Form";

  const infoText = document.createElement("p");
  infoText.innerText =
    "Please enter your email to receive a link to create a new password via email";

  form.append(title, infoText, input, button);

  return form;
}
