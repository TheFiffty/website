//fonction qui donne la résolution (taille) de l'écran
function getResolution() 
{
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;

  document.documentElement.style.setProperty('--wScreen', `${realWidth}px`);
  document.documentElement.style.setProperty('--hScreen', `${realHeight}px`);
  // document.documentElement.style.setProperty('--wScreen', window.screen.width  + 'px');
  // document.documentElement.style.setProperty('--hScreen', window.screen.height  + 'px');

  console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
  console.log("The screen's size is :" + window.screen.width * window.devicePixelRatio + " x " + window.screen.height * window.devicePixelRatio + " pixels");
  
};

//récupération de la taille de la fenêtre
function getWindowSize() 
{
  // Récupération de la largeur de la fenêtre du navigateur
  // var windowWidth = window.innerWidth;
  // Récupération de la largeur de la fenêtre visible (sans la bande de déroulement)
  // var visibleWidth = document.documentElement.clientWidth;
  // Calcul de la largeur de la bande de déroulement
  // var scrollbarWidth = windowWidth - visibleWidth;

	console.log("The window's size is :" + window.innerWidth + " x " + window.innerHeight + " pixels");
  console.log("The window's size 2 is :" + document.documentElement.clientWidth + " x " + document.documentElement.clientHeight + " pixels");

  document.documentElement.style.setProperty('--wWindow', document.documentElement.clientWidth + 'px');
  document.documentElement.style.setProperty('--hWindow', document.documentElement.clientHeight + 'px');

};

//scroll de la première page
// function scroll() {
//   window.location.href = "#menu-container"; //Your next section
  
// }


//---------------------- Executable  ------------------------

//empeche l'utilisation du clique droit
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


//---------------------- UTILISATION FONCTIONS ------------------------

//utlilisation des fonctions au chargement
window.onload = function()
{
  getResolution();
  getWindowSize();

};

//utilisation des fonctions à la modification de taille
window.onresize = function()
{
  getWindowSize();

};

//utilisation des fonctions lors de l'event onscroll
window.onscroll = function()
{
  // scroll();
}