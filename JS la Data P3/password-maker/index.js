const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
// console.log(dataUppercase);
const dataNumbers = "1234567890";
const dataSymbols = 'ù!:;,"=)';
// console.log(dataSymbols);

const generatePassword = () => {
  //   console.log("je génère un mot de passe");
  let data = [];

  //   console.log(lowercase.checked);
  if (lowercase.checked) data.push(dataLowercase);
  if (uppercase.checked) data.push(dataUppercase);
  if (number.checked) data.push(dataNumbers);
  if (symbols.checked) data.push(dataSymbols);

  console.log(data);
};

generateButton.addEventListener("click", () => {
  //   console.log("test");
  generatePassword();
});

// 02:30:48
