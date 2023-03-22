// --- CARROUSEL ---

// --- Variables ---
const images = document.querySelectorAll(".images");
const indicateurs = document.querySelectorAll(".indicateur");
const flecheGauche = document.querySelector(".fleche-gauche");
const flecheDroite = document.querySelector(".fleche-droite");
let index = 0;

// Changer l'image du carrousel toute les 3 secondes
let timingCaroussel = setInterval(changeImageSuivante, 4000);

// --- Fleche de gauche ---
flecheGauche.addEventListener("click", () => {
  changeImagePrecedente();
  clearInterval(timingCaroussel);
});
// --- Fleche de droite ---
flecheDroite.addEventListener("click", () => {
  changeImageSuivante();
  clearInterval(timingCaroussel);
});

// --- indicateurs  ---
for (let i = 0; i < indicateurs.length; i++) {
  indicateurs[i].addEventListener("click", () => {
    clearInterval(timingCaroussel);
    index = i;
    // --- Changement d'image ---
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("image-active");
    }
    images[i].classList.add("image-active");
    // --- Changement d'indicateur
    for (let i = 0; i < indicateurs.length; i++) {
      indicateurs[i].classList.remove("indicateur-active");
    }
    indicateurs[i].classList.add("indicateur-active");
    console.log(index);
  });
}

// --- Fonctions ---

function changeImagePrecedente() {
  index--;
  if (index === -1) {
    index = 2;
  }
  // Changement de l'état indicateur
  for (let i = 0; i < indicateurs.length; i++) {
    indicateurs[i].classList.remove("indicateur-active");
  }
  indicateurs[index].classList.add("indicateur-active");
  // --- Changement d'image ---
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("image-active");
  }
  images[index].classList.add("image-active");
}

function changeImageSuivante() {
  index++;
  if (index === 3) {
    index = 0;
  }
  // Changement de l'état indicateur
  for (let i = 0; i < indicateurs.length; i++) {
    indicateurs[i].classList.remove("indicateur-active");
  }
  indicateurs[index].classList.add("indicateur-active");
  // --- Changement d'image ---
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("image-active");
  }
  images[index].classList.add("image-active");
}

// --- GALERIE ---
