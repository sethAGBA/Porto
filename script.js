// Récupérer les éléments HTML nécessaires
const toggleMenuButton = document.querySelector(".toggle-menu");
const navbar = document.querySelector(".navbar");

// Ajouter un événement de clic sur le bouton "toggle menu"
toggleMenuButton.addEventListener("click", () => {
  // Basculer la classe 'active' sur le menu
  navbar.classList.toggle("active");
});

// Fermer le menu automatiquement si un lien est cliqué
navbar.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navbar.classList.remove("active");
  }
});



