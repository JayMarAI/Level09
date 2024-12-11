var e1 = document.getElementById("eye");
var e2 = document.getElementById("eye2");
var e3 = document.getElementById("eye3");
var p = document.getElementById("paper");
var d = document.getElementById("door");
var cv = document.getElementById("cover");

var c1 = document.getElementById("1");
var c2 = document.getElementById("2");
var c3 = document.getElementById("3");
var c4 = document.getElementById("4");
var c5 = document.getElementById("5");
var c6 = document.getElementById("6");

var w = document.getElementById("warning");

var wb = document.getElementById("warningbox");

var go = document.getElementById("gameover");

var bg = document.getElementById("bg");
var audios = document.getElementsByTagName("audio");
var it = document.getElementById("intro");

let eye1 = document.createElement("img");
let eye2 = document.createElement("img");
let eye3 = document.createElement("img");
let eye4 = document.createElement("img");
let eye5 = document.createElement("img");
let eye6 = document.createElement("img");
eye1.setAttribute("src", "images/eye.png");
eye2.setAttribute("src", "images/eye.png");
eye3.setAttribute("src", "images/eye.png");
eye4.setAttribute("src", "images/eye.png");
eye5.setAttribute("src", "images/eye.png");
eye6.setAttribute("src", "images/eye.png");
eye1.classList.add("img3");
eye2.classList.add("img3");
eye3.classList.add("img3");
eye4.classList.add("img3");
eye5.classList.add("img3");
eye6.classList.add("img3");

var answer = 0;
let pattern = [];
let user = [1, 1, 1, 1, 1, 1];
let isPaused = false;
let isStart = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/*
document.addEventListener("mousemove", function (e) {
  const cursor = document.getElementById("cr");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageX + "px";
  cursor.style.display = "block";
});

document.getElementById("bush").addEventListener("click", function () {
  document.getElementById("cr").style.display = "block";
});
*/
function lockOpen() {
  document.getElementById("select").play();
  d.onmouseout = null;
  document.getElementById("input").style.display = "block";
  d.classList.remove("translucent");
}

function lockClose() {
  document.getElementById("close").pause();
  document.getElementById("close").play();
  document.getElementById("input").style.display = "none";
  d.classList.add("translucent");
  d.setAttribute("onmouseout", "hoverNeg(this)");
}

function leave() {
  window.location.href = "https://72vyvc.csb.app/";
}

function hintShow() {
  document.getElementById("select").play();
  p.onmouseout = null;
  document.getElementById("hinty").style.display = "flex";
  p.classList.remove("translucent");
}

function hintHide() {
  document.getElementById("close").pause();
  document.getElementById("close").play();
  document.getElementById("hinty").style.display = "none";
  p.classList.add("translucent");
  p.setAttribute("onmouseout", "hoverNeg(this)");
}

function num1() {
  document.getElementById("cselect").play();
  if (user[0] == 1) {
    user[0] = 2;
    c1.textContent = user[0];
    Check();
  } else if (user[0] == 2) {
    user[0] = 3;
    c1.textContent = user[0];
    Check();
  } else {
    user[0] = 1;
    c1.textContent = user[0];
    Check();
  }
}

function num2() {
  document.getElementById("cselect").play();
  if (user[1] == 1) {
    user[1] = 2;
    c2.textContent = user[1];
    Check();
  } else if (user[1] == 2) {
    user[1] = 3;
    c2.textContent = user[1];
    Check();
  } else {
    user[1] = 1;
    c2.textContent = user[1];
    Check();
  }
}

function num3() {
  document.getElementById("cselect").play();
  if (user[2] == 1) {
    user[2] = 2;
    c3.textContent = user[2];
    Check();
  } else if (user[2] == 2) {
    user[2] = 3;
    c3.textContent = user[2];
    Check();
  } else {
    user[2] = 1;
    c3.textContent = user[2];
    Check();
  }
}

function num4() {
  document.getElementById("cselect").play();
  if (user[3] == 1) {
    user[3] = 2;
    c4.textContent = user[3];
    Check();
  } else if (user[3] == 2) {
    user[3] = 3;
    c4.textContent = user[3];
    Check();
  } else {
    user[3] = 1;
    c4.textContent = user[3];
    Check();
  }
}

function num5() {
  document.getElementById("cselect").play();
  if (user[4] == 1) {
    user[4] = 2;
    c5.textContent = user[4];
    Check();
  } else if (user[4] == 2) {
    user[4] = 3;
    c5.textContent = user[4];
    Check();
  } else {
    user[4] = 1;
    c5.textContent = user[4];
    Check();
  }
}

function num6() {
  document.getElementById("cselect").play();
  if (user[5] == 1) {
    user[5] = 2;
    c6.textContent = user[5];
    Check();
  } else if (user[5] == 2) {
    user[5] = 3;
    c6.textContent = user[5];
    Check();
  } else {
    user[5] = 1;
    c6.textContent = user[5];
    Check();
  }
}

async function caught() {
  //await sleep(6000);
  await sleep(192000);
  document.getElementById("losecover").style.display = "flex";
  await sleep(5000);
  document.getElementById("jump").play();
  document.getElementById("jumpscare").style.display = "flex";
  document.getElementById("jump").addEventListener("ended", function () {
    gameOver();
  });
}

async function gameOver() {
  document.getElementById("jumpscare").style.display = "none";
  await sleep(3000);
  document.getElementById("dead").loop = true;
  document.getElementById("dead").play();
  document.getElementById("gameover").style.display = "flex";
}

function setEyes() {
  e1.style.display = "none";
  e2.style.display = "none";
  e3.style.display = "none";
  for (let x = 0; x <= 5; x++) {
    pattern.push(Math.floor(Math.random() * 3) + 1);
  }
  if (pattern[4] == 1) {
    pattern[4] = Math.floor(Math.random() * 3) + 1;
  }
  if (pattern[5] == 1) {
    pattern[5] = Math.floor(Math.random() * 3) + 1;
  }
  answer = parseInt(pattern.join(""));
}

async function endEyes(e) {
  e.style.display = "flex";
  await sleep(100);
  e.style.display = "none";
  await sleep(100);
  e.style.display = "flex";
  await sleep(100);
  e.style.display = "none";
  await sleep(100);
  e.style.display = "flex";
  await sleep(100);
  e.style.display = "none";
  await sleep(100);
  e.style.display = "flex";
  await sleep(100);
  e.style.display = "none";
}

async function Eyes() {
  x = 2000;
  await sleep(5000);
  console.log(pattern);
  for (let idx = 0; idx <= 5; idx++) {
    if (pattern[idx] == 1) {
      e1.style.display = "flex";
      await sleep(x);
      e1.style.display = "none";
      await sleep(x);
    } else if (pattern[idx] == 2) {
      e2.style.display = "flex";
      await sleep(x);
      e2.style.display = "none";
      await sleep(x);
    } else if (pattern[idx] == 3) {
      e3.style.display = "flex";
      await sleep(x);
      e3.style.display = "none";
      await sleep(x);
    }
  }

  await sleep(1000);

  endEyes(e1);
  endEyes(e2);
  endEyes(e3);

  Eyes();
}

//code check
function Check() {
  let guess = parseInt(user.join(""));
  if (guess == answer) {
    document.getElementById("scare").play();
    d.src = "images/door2.png";
    c1.textContent = null;
    c2.textContent = null;
    c3.textContent = null;
    c4.textContent = null;
    c5.textContent = null;
    c6.textContent = null;
    c1.parentNode.replaceChild(eye1, c1);
    c2.parentNode.replaceChild(eye2, c2);
    c3.parentNode.replaceChild(eye3, c3);
    c4.parentNode.replaceChild(eye4, c4);
    c5.parentNode.replaceChild(eye5, c5);
    c6.parentNode.replaceChild(eye6, c6);
    c1.onclick = null;
    c2.onclick = null;
    c3.onclick = null;
    c4.onclick = null;
    c5.onclick = null;
    c6.onclick = null;
    c1.onmouseover = null;
    c2.onmouseover = null;
    c3.onmouseover = null;
    c4.onmouseover = null;
    c5.onmouseover = null;
    c6.onmouseover = null;
    c1.onmouseout = null;
    c2.onmouseout = null;
    c3.onmouseout = null;
    c4.onmouseout = null;
    c5.onmouseout = null;
    c6.onmouseout = null;
    c1.classList.remove("clickable");
    c2.classList.remove("clickable");
    c3.classList.remove("clickable");
    c4.classList.remove("clickable");
    c5.classList.remove("clickable");
    c6.classList.remove("clickable");

    d.onclick = leave;
  }
}

function hover(e) {
  e.classList.remove("translucent");
}

function hoverNeg(e) {
  e.classList.add("translucent");
}

function numHover(e) {
  e.classList.add("texthover");
}

function numHoverNeg(e) {
  e.classList.remove("texthover");
}

function bgPlay() {
  console.log("bg playing!");
  bg.play();
}

function cover() {
  if ((window.innerHeight !== screen.height) & (isStart == true)) {
    isPaused = true;
    cv.style.display = "flex";
  } else {
    isPaused = false;
    cv.style.display = "none";
  }
}

function firstCover() {
  if ((window.innerHeight !== screen.height) & (isStart == false)) {
    document.getElementById("cover1").style.display = "flex";
  } else {
    it.play();
    document.getElementById("cover1").remove();
    isStart = true;
  }
}

function onVideoEnd() {
  firstCover = null;
  it = null;
  vidc.remove();
  bgPlay();
  caught();
  Eyes();
  warnings();
}

async function warnings() {
  await sleep(30000);
  wb.style.display = "flex";
  await sleep(9000);
  fade(w);
  await sleep(30000);
  w.classList.remove("fade");
  w.classList.add("fade-in");
  w.textContent = "Somethings approaching...";
  await sleep(9000);
  w.classList.add("fade");
  fade(w);
  await sleep(38000);
  w.classList.remove("fade");
  w.classList.add("fade-in");
  w.textContent = "It's close...";
  await sleep(9000);
  w.classList.add("fade");
  fade(w);
  await sleep(31000);
  w.classList.remove("fade");
  w.classList.add("fade-in");
  w.textContent = "...";
  await sleep(9000);
  w.classList.add("fade");
  fade(w);
}

function fade(e) {
  e.classList.add("fade-out");
  e.classList.remove("fade-in");
}

function fade2(e) {
  e.classList.add("fade-in");
  e.classList.remove("fade-out");
}

it.addEventListener("ended", onVideoEnd);
setInterval(cover, 1);
setInterval(firstCover, 1);
setEyes();
