
console.log("hi");

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var bgImage = new Image();
bgImage.src = "images/bg.png";

function update() {
  updateBackground();

  requestAnimationFrame(update)
}

function draw() {
  drawBackground();

  requestAnimationFrame(draw);
}

update()
draw();

// Background
var bgX = 0;
var bgY = 0;

function updateBackground() {
  bgX = bgX - 2
  if (bgX < -856) {
    bgX = 0
  }
}

function drawBackground() {
  ctx.drawImage(bgImage, bgX, bgY);
  ctx.drawImage(bgImage, bgX +856, bgY);

}
