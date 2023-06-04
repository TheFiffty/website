//getting the screen size
function getResolution() {
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;

  document.documentElement.style.setProperty('--wScreen', `${realWidth}px`);
  document.documentElement.style.setProperty('--hScreen', `${realHeight}px`);

  console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
  console.log("The screen's size is :" + window.screen.width * window.devicePixelRatio + " x " + window.screen.height * window.devicePixelRatio + " pixels");
  
};

//getting the window's size
function getWindowSize() {
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
  var sticky;

  if (windowHeight > menuPosition && imagePosition < 0) {
    menu.classList.add("sticky");
    menu.classList.remove("scrolly");
    sticky = true;
  } else {
    menu.classList.remove("sticky");
    menu.classList.add("scrolly");
    sticky = false;
  }

  return sticky;
};

//pictured disparition
function pictureDisparition() {
  var image = document.querySelector(".cadre_img_accueil");
  var imagePosition = image.getBoundingClientRect().top;

  if (imagePosition <= 0) {
    image.classList.add("hidden");
    image.classList.remove("visible");
  } else {
    image.classList.remove("hidden");
    image.classList.add("visible");
  }

  //check if pic on top of page
  if (window.pageYOffset <= 0) {
    image.classList.remove("hidden");
    image.classList.add("visible");
  }
}

//function for the en of the picture
function endPic() {
  var image = document.querySelector('.cadre_img_accueil');
  var imageBottom = image.getBoundingClientRect().bottom;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var isOnHomePage = true;
  console.log(windowHeight);
  if (imageBottom < 0) {
    console.log(imageBottom);
    console.log('end of pic not in the screen');
    isOnHomePage = false;
  } else {
    console.log(imageBottom);
    console.log('end of pic in the screen');
    isOnHomePage = true;
  }
  return isOnHomePage;
}

//custom scroll
function scrollToCustom(top, duration, alignMenuToTop) {
  const start = window.pageYOffset || document.documentElement.scrollTop;
  const distance = top - start;
  const startTime = performance.now();
  const maxIterations = 35;
  const errorMargin = Math.abs(distance) * 0.03;
  let currentIteration = 0;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function scroll(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = elapsed / duration;

    const easeProgress = easeInOutQuad(progress);
    const newPosition = start + distance * easeProgress;

    if (
      elapsed >= duration ||
      (Math.abs(newPosition - top) <= errorMargin && progress >= 0.9)
    ) {
      if (alignMenuToTop) {
        window.scrollTo(0, top - menu.offsetHeight);
      }
    } else {
      const scrollAmount = distance * easeProgress * 0.03;
      window.scrollBy(0, scrollAmount);

      if (elapsed < duration && currentIteration < maxIterations) {
        currentIteration++;
        requestAnimationFrame(scroll);
      }
    }
  }

  requestAnimationFrame(scroll);
}



//"go to" function
var previousScrollTop = 0;
function scrollPage(event) {
  var image = document.querySelector('.cadre_img_accueil');
  var imageBottom = image.getBoundingClientRect().bottom;

  var menu = document.querySelector("#menu");
  var content = document.querySelector("#content");

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var isOnHomePage = endPic();
  console.log('endPic', isOnHomePage);
  var sticky = stickyMenu();
  if (scrollTop > previousScrollTop) {
    // Défilement vers le bas
    console.log('scroll down', scrollTop);
    if (isOnHomePage) {
      scrollToCustom(menu.offsetTop, 1000, true);
             
    }
    else {
    }
  } 
  else {
    // Défilement vers le haut
    console.log('scroll up', scrollTop);
    if (menu.getBoundingClientRect().top > 0) {
      scrollToCustom(image.offsetTop, 1000, false);
    }
  }

  previousScrollTop = scrollTop;

  // Ajoutez la classe sticky et ajustez la position du contenu en dessous du menu
  // if (isOnHomePage) {
    
  // } else {
    
  // }
}




// window.addEventListener("scroll", scrollPage);

function f() {
  var image = document.querySelector('.cadre_img_accueil');
  var imageBottom = image.getBoundingClientRect().bottom;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (imageBottom < 0) {
    // Le bas de l'image est hors de l'écran
    console.log(imageBottom);
    console.log(windowHeight);
    console.log('Le bas de l\'image est hors de l\'écran');
  } else {
    // Le bas de l'image est visible à l'écran
    console.log(imageBottom);
    console.log(windowHeight);
    console.log('Le bas de l\'image est visible à l\'écran');
  }
};















  

//---------------------- EXECUTABLES  ------------------------

//prevent the right click use
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });

//scroll


//---------------------- UTILISATION FONCTIONS ---------------

//utlilisation des fonctions au chargement
window.onload = function() {
  getResolution();
  getWindowSize();

};

//utilisation des fonctions à la modification de taille
window.onresize = function() {
  getWindowSize();

};

//utilisation des fonctions lors de l'event onscroll
window.onscroll = function() {
  // stickyMenu();
  scrollPage();
  // pictureDisparition();

}