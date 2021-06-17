var falling = [];
var goalOrigin;
var goalRadius = 200;
let img;
var plane;
function preload() {
  img = loadImage("assets/skyline.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createArray();
  goalOrigin = windowWidth / 2;
  plane = new Plane();
}

function createArray() {
  for (let i = 0; i < 10; i++) {
    falling.push(
      new Person(
        "Mike",
        "https://static-cdn.jtvnw.net/user-default-pictures-uv/f7b4decd-dea9-4cde-87c6-a80f21aafb0e-profile_image-70x70.png"
      )
    );
  }
}

function draw() {
  clear();
  background("rgba(0,0,0, 0)");
  noStroke();
  tint(255, 255);

  fill(255, 204, 0);

  // Draw the target
  image(
    img,
    goalOrigin - goalRadius,
    windowHeight - goalRadius,
    goalRadius * 2,
    goalRadius * 2
  );

  // Draw all the falling peeps
  falling.forEach((person) => {
    person.update();
    person.draw();
  });

  plane.update();
  plane.draw();
}
