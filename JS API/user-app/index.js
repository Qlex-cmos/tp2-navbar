// alert("coucou");

// https://randomuser.me/api/?results=24

let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  // .then(() => console.log(userData));
  console.log(userData);
};

const userDisplay = async () => {
  await fetchUser();

  document.body.innerHTML = userData
    .map(
      (user) =>
        // guillemets de la touche 7
        ` 
        <div class="card">
            <img src=${user.picture.large} alt="user img">
            <h3>${user.name.first}</h3>
        </div>
    `
    )
    .join("");
}; // contrairement à TextContent, l'innerHTML permet de mettre des balises en plus

userDisplay();
