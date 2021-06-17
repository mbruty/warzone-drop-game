const MAX_TEXT_SIZE = 32;

function Person(name, imgUrl) {
  this.name = name;

  this.x = Math.random() * windowWidth; // Random starting position
  this.radius = 25;
  this.y = this.radius; // Start at the top

  this.dx = Math.random() * 5 + 0.5;
  this.dy = Math.random() * 5 + 0.5;

  this.isFalling = true;
  this.fontSize = 10;
  this.isDisappearing = false;
  this.opacity = 255;

  this.img = loadImage(imgUrl);

  this.draw = () => {
    tint(255, this.opacity);
    if (!this.isFalling) {
      fill(255, 255, 255, this.opacity);
      textSize(this.fontSize);
      let textContentWidth = textWidth(this.name) - this.radius;
      text(this.name, this.x - textContentWidth / 2, this.y - 26);
      fill(0, 204, 0);
    }

    image(this.img, this.x, this.y, this.radius * 2, this.radius * 2);

    // ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    fill(255, 204, 0);
  };

  this.update = () => {
    if (this.isFalling) {
      this.x += this.dx;
      this.y += this.dy;
      this.calculateCollision();
      if (this.x + this.radius >= windowWidth || this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }

      if (this.y > windowHeight) {
        this.remove();
      }
      return;
    }

    if (this.fontSize < MAX_TEXT_SIZE && !this.isDisappearing) {
      this.fontSize++;
    } else if (!this.isDisappearing) {
      setTimeout(() => {
        this.isDisappearing = true;
      }, 10000);
      setTimeout(() => {
        this.remove();
      }, 12000);
    }

    if (this.isDisappearing) {
      if (this.fontSize > 10) {
        this.fontSize -= 0.5;
      }

      if (this.opacity > 0) {
        this.opacity -= 5;
      }
    }
  };

  this.remove = (shouldFadeOut) => {
    falling = falling.filter((item) => item !== this);
  };

  this.calculateCollision = () => {
    let distance = dist(this.x, this.y, goalOrigin, windowHeight);
    if (this.radius + goalRadius >= distance) {
      this.isFalling = false;
      this.dx = 0;
      this.dy = 0;
    }
  };
}
