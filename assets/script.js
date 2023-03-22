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

// Gerer l'état des filtres
// Variables
const filtres = document.querySelectorAll(".filtres");
const imageTous = document.querySelectorAll(".grid");
const imageConcert = document.querySelectorAll(".concert");
const imageEntreprises = document.querySelectorAll(".entreprises");
const imageMariages = document.querySelectorAll(".mariages");
const imagePortrait = document.querySelectorAll(".portrait");
let indexFiltre = 0;

for (let i = 0; i < filtres.length; i++) {
  filtres[i].addEventListener("click", () => {
    changeFiltre(filtres[i]);
  });
}

// fonctions
function changeFiltre(filtre) {
  // changement de background des filtres
  for (let i = 0; i < filtres.length; i++) {
    filtres[i].classList.remove("filtre-active");
  }
  filtre.classList.add("filtre-active");

  // Filtrer les images
  // Images Tous
  if (filtre.textContent === "Tous") {
    for (let i = 0; i < imageTous.length; i++) {
      imageTous[i].style.display = "";
    }
    // Images Concert
  } else if (filtre.textContent === "Concert") {
    for (let i = 0; i < imageConcert.length; i++) {
      imageConcert[i].style.display = "";
    }
    for (let i = 0; i < imageEntreprises.length; i++) {
      imageEntreprises[i].style.display = "none";
    }
    for (let i = 0; i < imageMariages.length; i++) {
      imageMariages[i].style.display = "none";
    }
    for (let i = 0; i < imagePortrait.length; i++) {
      imagePortrait[i].style.display = "none";
    }
    // Images Entreprises
  } else if (filtre.textContent === "Entreprises") {
    for (let i = 0; i < imageConcert.length; i++) {
      imageConcert[i].style.display = "none";
    }
    for (let i = 0; i < imageEntreprises.length; i++) {
      imageEntreprises[i].style.display = "";
    }
    for (let i = 0; i < imageMariages.length; i++) {
      imageMariages[i].style.display = "none";
    }
    for (let i = 0; i < imagePortrait.length; i++) {
      imagePortrait[i].style.display = "none";
    }
    // Image Mariages
  } else if (filtre.textContent === "Mariages") {
    for (let i = 0; i < imageConcert.length; i++) {
      imageConcert[i].style.display = "none";
    }
    for (let i = 0; i < imageEntreprises.length; i++) {
      imageEntreprises[i].style.display = "none";
    }
    for (let i = 0; i < imageMariages.length; i++) {
      imageMariages[i].style.display = "";
    }
    for (let i = 0; i < imagePortrait.length; i++) {
      imagePortrait[i].style.display = "none";
    }
    // Images Portrait
  } else if (filtre.textContent === "Portrait") {
    for (let i = 0; i < imageConcert.length; i++) {
      imageConcert[i].style.display = "none";
    }
    for (let i = 0; i < imageEntreprises.length; i++) {
      imageEntreprises[i].style.display = "none";
    }
    for (let i = 0; i < imageMariages.length; i++) {
      imageMariages[i].style.display = "none";
    }
    for (let i = 0; i < imagePortrait.length; i++) {
      imagePortrait[i].style.display = "";
    }
  }
}
