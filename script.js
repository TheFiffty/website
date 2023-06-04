//getting the screen size
function getResolution() 
{
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;

  document.documentElement.style.setProperty('--wScreen', `${realWidth}px`);
  document.documentElement.style.setProperty('--hScreen', `${realHeight}px`);

  console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
  console.log("The screen's size is :" + window.screen.width * window.devicePixelRatio + " x " + window.screen.height * window.devicePixelRatio + " pixels");
  
};

//getting the window's size
function getWindowSize() 
{
	console.log("The window's size is :" + window.innerWidth + " x " + window.innerHeight + " pixels");
  console.log("The window's size 2 is :" + document.documentElement.clientWidth + " x " + document.documentElement.clientHeight + " pixels");

  document.documentElement.style.setProperty('--wWindow', document.documentElement.clientWidth + 'px');
  document.documentElement.style.setProperty('--hWindow', document.documentElement.clientHeight + 'px');

};

//sticky becoming of the menu
function stickyMenu() {
  var menu = document.querySelector("#menu");
  var menuPosition = menu.getBoundingClientRect().top;

  var windowHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hScreen'));

  var image = document.querySelector(".cadre_img_accueil");
  var imagePosition = image.getBoundingClientRect().bottom;

  if (windowHeight > menuPosition && imagePosition < 0) {
    menu.classList.add("sticky");
    menu.classList.remove("scrolly");
  } else {
    menu.classList.remove("sticky");
    menu.classList.add("scrolly");
  }
};




//---------------------- EXECUTABLES  ------------------------

//empeche l'utilisation du clique droit
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });

//disparition de l'image en un scroll
window.addEventListener("scroll", function() {
		var image = document.querySelector(".cadre_img_accueil");
		var imagePosition = image.getBoundingClientRect().top;
		
    

   
    
		// if (imagePosition < windowHeight && window.scrollY > 0) {
		// 		image.classList.add("hidden");
    //     image.classList.remove("visible");
    //     if(menuPosition < windowHeight )
    //     {
    //       window.location.href = "#menu";
    //     }
		// } else {
		// 		image.classList.remove("hidden");
    //     image.classList.add("visible");
		// }
    // if (imagePosition > windowHeight && window.scrollY < 0)
});


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
  stickyMenu();
}