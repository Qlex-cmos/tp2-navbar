const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  // const pseudoContainer = document.querySelector(".pseudo-container");
  // const errorDisplay = document.querySelector(".pseudo-container > span");

  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    // pseudoContainer.classList.add("error");
    // errorDisplay.textContent = "Le pseudo doit faire entre 3 et 20 caractères";
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    // pseudoContainer.classList.add("error");
    // errorDisplay.textContent =
    //   "Le pseudo ne peut pas contenir de caractères spéciaux";
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    // pseudoContainer.classList.remove("error");
    // errorDisplay.textContent = "";
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  // console.log(value);
  progressBar.classList = ""; // pour éviter que les classes ProgressBar s'empilent
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    // console.log("test");
    errorDisplay(
      "password",
      "Minimum de 8 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  // console.log(value);
  if (value !== password) {
    // console.log("error");
    errorDisplay("confirm", "les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e.target.value);
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

form.addEventListener("submit", (e) => {
  // console.log("test");
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    // if(pseudo) signifie pseudo est true
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée");
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});
