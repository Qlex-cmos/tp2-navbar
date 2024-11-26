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

//---------------------------
// Les structures de contrôle
//---------------------------

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
  console.log(e.target.id);

  // if (e.target.id === "JS") {
  //   document.body.style.background = "yellow";
  // }

  // *********** SWITCH *****************
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
