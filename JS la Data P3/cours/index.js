// Rappel des types de données
let string = "Chaîne";
let number = 25;
let boolean;
let maVariable; // undefined

let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[2][1]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// Ajouter un attribut à un objet
objet.adresse = "22 rue du code";

// console.log(objet.technos[0][1]);
// console.log(objet);

// Stockage des objets dans un tableau (base de données)
let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nico",
    age: 42,
    technos: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

//////////////////////////////
// Les structures de contrôle
/////////////////////////////

// if (data[0].age > data[1].age) {
//   console.log(data[0].pseudo + " est plus âgé que " + data[1].pseudo);
// } else {
//   //valeur si faux
// }

// if(valeur à tester) valeur si vrai // quand ça tient sur une ligne

// valeur à tester ? si vrai : si faux -> *** structure ternaire ***

// WHILE
let w = 0;

// while (w < 10) {
//   w++;
//   console.log("La valeur de w est de : " + w);
// }

// DO WHILE
// let d = 0;

// do {
//   d++;
//   console.log(d);
// } while (d < 5);

// LES BOUCLES FOR
// for (const user of data) {
//   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
// }

// console.log(data.length);

// for (i = 0; i < data.length; i++) {
//   // console.log(i);
//   // console.log(data[i].technos[2]);
//   document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
// }

document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);

  // if (e.target.id === "JS") {
  //   document.body.style.background = "yellow";
  // }

  ///////////////////////////////////////
  // *********** SWITCH *****************
  ///////////////////////////////////////

  switch (e.target.id) {
    case "JS":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

////////////////////////////////////
// ******  METHODES STRINGS  *******
////////////////////////////////////

let string2 = "Javascript est un langage orienté Objet";
// console.log(typeof string2);
// console.log(eval("1" + 2));
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage")); // retourne -1 s'il ne le connaît pas

// let newString = string2.slice(2);
// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split("i"));

// console.log(string2.toLocaleLowerCase());
// console.log(string2.toLocaleUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

////////////////////////////////////////
// ******* METHODES NUMBERS ************
////////////////////////////////////////

let number2 = 42.1234;
let numberString = "42.12 est un nombre";

// console.log(number2.toFixed(2));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// MATH
// console.log(Math.PI);
// console.log(Math.round(4.5)); // arrondi à l'entier le plus proche
// console.log(Math.floor(4.9)); // arrondi à l'entier inférieur
// console.log(Math.ceil(4.1)); // arrondi à l'entier supérieur
// console.log(Math.pow(2, 7)); // puissance
// console.log(Math.sqrt(16)); // racine carrée
// console.log(Math.floor(Math.random() * 100)); // Math.random() produit un chiffre aléatoirement entre 0 et 1

///////////////////////////////////////
// ******* METHODES ARRAYS ************
///////////////////////////////////////

let array3 = ["Javascript", "React", "NodeJs"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
// console.log(newArray);

// ...= "spread operator", permet de développer le tableau
// let newArray = [...array3, ...array4];
// console.log(newArray);

// Méthode "join"
// console.log(array3.join("-"));

// Méthode "Slice"
// console.log(array3.slice(1));
// console.log(newArray);
// console.log(newArray.slice(2, 5));

// Méthode "indexOf"
// console.log(array3.indexOf("React"));

// ForEach
// array3.forEach((languages) => console.log(languages));

// Méthodes "every" et "some"
// console.log(array3.every((language) => language == "React"));
// console.log(array3.some((language) => language == "React"));

// méthode "shift" , retire le premier index du tableau
// let shift = array3.shift();
// console.log(shift);
// console.log(array3);

// méthode "pop", retire le dernier élément
// console.log(array3.pop());
// console.log(array3);

// méthode "splice"
// const restArray = array3.splice(0, 2, "c++");
// console.log(array3);

/////////////////////////////////
//********* IMPORTANT *********//
/////////////////////////////////

// méthode  "reduce", pour appliquer une opération arithmétique à des éléments d'un tableau
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));

// Méthode "push", ajouter des éléments à un tableau
// arrayNumber.push(17);
// console.log(arrayNumber);

// FILTER (pour filtrer), SORT (pour trier), MAP (pour lister, mapper)
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// Trier par ordre décroissant
// console.log(arrayNumber.sort((a, b) => b - a));
// Trier par ordre croissant
// console.log(arrayNumber.sort((a, b) => a - b));
// En utilisant plusieurs méthodes de tri à la fois
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => b - a));

// arrayNumber.map((number) => console.log(number));
// arrayNumber.map((number) => (document.body.innerHTML += `<li> ${number}</li>`));
// document.body.innerHTML = arrayNumber.map((number) => `<li> ${number}</li>`);
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join("");

/////////////////////////////////
//******* METHODES OBJET ******//
/////////////////////////////////

// document.body.innerHTML = data
//   // .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes("i"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
//   <div class="user-card">
//     <h2>${user.pseudo}</h2>
//     <p>Age : ${user.age} ans</p>
//     <p>Status : ${user.admin ? "Moderateur" : "Membre"}</p>
//   </div>
// `
//   )
//   .join("");

////////////////////////
// *** LES DATES *** //
///////////////////////

// Dates Classiques
let date = new Date();

// // Timestamp
// let timestamp = Date.parse(date);
// console.log(timestamp);

// // IsoString
let iso = date.toISOString();
// console.log(date.toISOString());

// function dateParser(chaine) {
//   let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   });
//   return newDate;
// }

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

////////////////////////////////
// *** LE DESTRUCTURING *** //
///////////////////////////////
let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;
// = const destVar = moreData.destVar
// destructuring

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
// console.log(array5[0]);
// console.log(array5[1]);
// console.log(array5[2]);
let [x, y, z] = array5;
// console.log(x, y, z);

// console.log(iso);
const dataDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
// console.log(dataDestructuring(iso));

// "Join" est l'inverse de "Split"

////////////////////////////////
// *** LES DATASETS *** //
///////////////////////////////

// const h3js = document.getElementById("JS");
// console.log(h3js.dataset.lang);

// const h3 = document.querySelectorAll("h3");
// h3.forEach((langage) => {
//   console.log(langage.dataset.lang);
// });

////////////////////////////////
// *** LES REGEX*** //
///////////////////////////////
let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/from/));

// console.log(mail.replace(/from/, "de"));
