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

// 58:50
