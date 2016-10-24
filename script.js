
console.log("hi");

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var bgImage = new Image();
bgImage.src = "images/bg.png";

function draw() {
  drawBackground();

  requestAnimationFrame(draw);
}

draw();

function drawBackground() {
  ctx.drawImage(bgImage, 0, 0);
}
