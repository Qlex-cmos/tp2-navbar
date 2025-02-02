// alert("coucou");
// https://api.blablagues.net/?rub=blagues

// 1) Télécharger le plugin "JSON view" qui permet de mettre des couleurs aux réponses de l'API
// 2) Essayer le lien dans la barre d'url

const header = document.getElementById("header");
const content = document.getElementById("content");

// console.log(header, content);

fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((data) => {
    header.textContent = data.data.content.text_head;
    content.textContent = data.data.content.content;
  });
