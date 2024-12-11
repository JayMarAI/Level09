console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/bg.jpg",
  "images/door1.png",
  "images/door2.png",
  "images/eye.png",
  "images/hint1.png",
  "images/key.png",
  "images/lock.png",
  "sounds/bg.mp3",
  "sounds/close.ogg",
  "sounds/codeselect.ogg",
  "sounds/scare.ogg",
  "sounds/select.ogg",
  "vid/intro.mp4"
);
