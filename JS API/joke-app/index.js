// alert("coucou");
// https://api.blablagues.net/?rub=blagues

// 1) Télécharger le plugin "JSON view" qui permet de mettre des couleurs aux réponses de l'API
// 2) Essayer le lien dans la barre d'url

const header = document.getElementById("header");
const content = document.getElementById("content");

// console.log(header, content);

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content; // Destructuring
      header.textContent = joke.text_head;
      // ternaire
      content.textContent =
        joke.text !== ""
          ? joke.text // correspond à (=== true) si c'est vrai, tu affiches text
          : joke.text_hidden; // correspond à (=== true) si c'est vrai, tu affiches text_hidden
    });
}

document.body.addEventListener("click", () => {
  getJoke();
});
