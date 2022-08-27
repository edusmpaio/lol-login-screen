const inputs = document.querySelectorAll(".input");
const loginButton = document.querySelector(".login-button");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const validateInputs = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.setAttribute("disabled", "");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
inputs.forEach((input) => input.addEventListener("input", validateInputs));
