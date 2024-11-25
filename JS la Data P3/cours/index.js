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

console.log(data[2].pseudo);
