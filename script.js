//fonction qui donne la résolution (taille) de l'écran
function getResolution() 
{
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;

  document.documentElement.style.setProperty('--wScreen', `${realWidth}px`);
  document.documentElement.style.setProperty('--hScreen', `${realHeight}px`);

  console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
  console.log("The screen's size is :" + window.screen.width * window.devicePixelRatio + " x " + window.screen.height * window.devicePixelRatio + " pixels");
  
};

//récupération de la taille de la fenêtre
function getWindowSize() 
{
	console.log("The window's size is :" + window.innerWidth + " x " + window.innerHeight + " pixels");
  console.log("The window's size 2 is :" + document.documentElement.clientWidth + " x " + document.documentElement.clientHeight + " pixels");

  document.documentElement.style.setProperty('--wWindow', document.documentElement.clientWidth + 'px');
  document.documentElement.style.setProperty('--hWindow', document.documentElement.clientHeight + 'px');

};

//scroll de la première page
function dealWithFirstPage()
{
  var image = document.querySelector(".cadre_img_accueil .img-accueil");
  var imagePosition = image.getBoundingClientRect().top;
  var windowHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hScreen'));
  
  if (imagePosition < windowHeight && window.scrollY > 0) {
      image.classList.add("hidden");
      image.classList.remove("visible");
  } else {
      image.classList.remove("hidden");
      image.classList.add("visible");
  }
  // if (imagePosition > windowHeight && window.scrollY < 0)
};


//---------------------- EXECUTABLES  ------------------------

//empeche l'utilisation du clique droit
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });


//---------------------- UTILISATION FONCTIONS ---------------

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
  dealWithFirstPage();
}
