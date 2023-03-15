//fonction qui donne la résolution de l'écran
function getResolution() {
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;
  console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
};

getResolution();

// Ajuste la taille de l'image lorsque la page est chargée
window.addEventListener("load", function() {
  // Sélectionne l'élément img
  var imgAccueil = document.getElementById("img.accueil");
  
  // Ajuste la taille de l'image
  imgAccueil.style.width = window.innerWidth + "px";
  imgAccueil.style.height = window.innerHeight + "px";
});

// Ajuste la taille de l'image lorsque la fenêtre est redimensionnée
window.onresize = function() {
  // Sélectionne l'élément img
  var imgAccueil = document.getElementById("img.accueil");
  
  // Ajuste la taille de l'image
  imgAccueil.style.width = window.innerWidth + "px";
  imgAccueil.style.height = window.innerHeight + "px";
};
