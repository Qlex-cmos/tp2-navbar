// alert("coucou");
// Méthode XMLHttpRequest (ancienne méthode remplacée par le FETCH)

function reqListener() {
  //   console.log(this.responseText);
}

let req = new XMLHttpRequest(); // nouvel objet de XMLHttpRequest
req.onload = reqListener; // La fonction reqListener() se joue au onload = au chargement de la requête
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//------------------------------------
// FETCH
//------------------------------------

// Ceci est un FETCH théorique
// fetch("mon lien", "objet d'Option")
//   .then((response) => {
//     // then = c'est une promesse. La réponse n'arrivera pas instantanément (notion de asynchrone)
//     // console.log(response)
//   })
//   .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

//------------------------------------

const myHeaders = new Headers(); // objet de javascript

const init = {
  // objet init
  method: "GET", // = apporte moi des données, correspond à un read dans CRUD
  headers: myHeaders,
  mode: "cors", // mode de transmission
  cache: "default",
};
// "CRUD" = create (POST), read (GET), update (PUT), delete (DELETE)

fetch("data.json", init).then((res) => console.log(res));

// exemples BDD : mySQL, MONGOdB

// --------- METHODES POUR UTILISER JSON-SERVER (NODEJS) ------------
// npm -v : version de npm
// cd cours : changer de répertoire
// npm init -y : initialisation des paquets npm -> donne package.json qui est un gestionnaire de dépendances (pour prendre des bibliothèques pour simuler un serveur)
// npm i -g json-server : i pour install, g pour global, cela installe json-server
// créer un fichier db.json
// json-server --watch db.json

// On va essayer maintenant de poster un message sur notre base de données
const init2 = {
  method: "POST", // ou DELETE et ajouter l'id du post à supprimer dans l'url du fetch
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Alex",
    age: 42,
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoyée")
  );
});

// Ctrl+C pour arrêter le serveur
//-----------------------------------------------------------------

//--------------------------------
// ASYNCHRONE : 3 METHODES
// Permet de dire à Javascript "attend avant d'exécuter ce code" car JS est un langage de script qui parcours de haut en bas le code mais ne s'arrête pas spobntanément quand il faut attendre
//--------------------------------

// 1ere Méthode approximative
setTimeout(() => {
  console.log("test");
}, 2000);
// cette méthode manque de précision

// 2e Méthode : PROMISE
// fetch("monlien").then((res) => res);

// 3e Méthode : ASYNC/AWAIT
async function fetchData() {
  await fetch("mon lien");
  // attend que le await soit exécuté avant de faire la suite
  executeFonction();
}

// version fonction fléchée de la méthode Async/await
const fetchData2 = async () => {
  // ensuite même logique que au dessus
};
