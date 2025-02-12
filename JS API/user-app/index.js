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

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const dateCalc = date;

  document.body.innerHTML = userData
    .map(
      (user) =>
        // guillemets de la touche 7
        ` 
        <div class="card">
            <img src=${user.picture.large} alt="user img">
            <h3>${user.name.first}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em> Membre depuis : ${user.registered.date} jours </em>
        </div>
    `
      // em = pour mettre en italique
    )
    .join("");
}; // contrairement à TextContent, l'innerHTML permet de mettre des balises en plus

userDisplay();
