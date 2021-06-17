function Plane() {
  this.interval = setInterval(this.checkDrop, 30000); // Check if it should drop every 30 seconds

  this.toDrop = {};
  this.checkDrop = () => {
    if (Object.keys(this.toDrop).length > 0) {
      this.x = 0; // If there are people to drop, set the x to 0
    }
  };

  this.x = 0;

  this.img = loadImage("assets/heli.png");

  this.draw = () => {
    image(this.img, this.x, 10, 141, 51);
  };

  this.update = () => {
    if (this.x < windowWidth) {
      this.x += 4;
      for (const key of Object.keys(this.toDrop)) {
        if (this.toDrop[key].x < this.x) {
          falling.push(this.toDrop[key]);
          delete this.toDrop[key];
        }
      }
    }
  };
}
