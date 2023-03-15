//fonction qui donne la résolution de l'écran
function getResolution() {
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;
  console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
};

getResolution();



