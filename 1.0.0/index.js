//fonction qui donne la résolution de l'écran
function getResolution() 
{
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;
  console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
};

//récupération de la taille de la fenêtre
function getWindowSize() 
{
	console.log("The window's size is :" + window.innerWidth + " x " + window.innerHeight + " pixels");
  document.documentElement.style.setProperty('--wF', window.innerWidth + 'px');
  document.documentElement.style.setProperty('--hF', window.innerHeight + 'px');

};


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
