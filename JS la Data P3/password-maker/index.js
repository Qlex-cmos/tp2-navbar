const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
// console.log(dataUppercase);
const dataNumbers = "1234567890";
const dataSymbols = 'ù!:;,"=)';
// console.log(dataSymbols);
const rangeValue = document.getElementById("password-length");
// console.log(rangeValue.value);
const passwordOutput = document.getElementById("password-output");
console.log(passwordOutput);

const generatePassword = () => {
  //   console.log("je génère un mot de passe");
  let data = [];
  let password = "";

  //   console.log(lowercase.checked);
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return; // return pour ne pas lire les instructions qui suivent
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    // console.log(password);
  }
  passwordOutput.value = password; // dans un input (ici passwordOutput -> voir index.html), on ne peut pas mettre de "texContent" ou de l"innerHtml"
};

generateButton.addEventListener("click", () => {
  //   console.log("test");
  generatePassword();
});
