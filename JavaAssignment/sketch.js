    // Array to hold flower objects
    let flowers = [];

    function setup() {
      createCanvas(400, 600);
      background(144, 238, 144);
        fill(240);
        let cnv = createCanvas(960, 540);
        cnv.id('canvas3');
        cnv.parent('movecanvas');
        noStroke();
        resizeCanvas(windowWidth,windowHeight);

      // Create a random number of flowers
      for (let i = 0; i < 400; i++) {
        let x = random(width);
        let y = random(height);
        let radius = random(10, 20);
        let petalColor = color(random(255), random(255), random(255));
        let centerColor = color(random(255), random(255), random(255));
        flowers.push(new Flower(x, y, radius, petalColor, centerColor));
      }
    }

    function draw() {
      background(220);
      // Update and display each flower
      for (let i = 0; i < flowers.length; i++) {
        flowers[i].update();
        flowers[i].display();
      }
    }

    // Flower class definition
    class Flower {
      constructor(x, y, radius, petalColor, centerColor) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.petalColor = petalColor;
        this.centerColor = centerColor;
        this.angle = random(TWO_PI);
        this.angularVelocity = random(-0.05, 0.05);
        this.offset = random(TWO_PI);
      }

      // Update the position and rotation of the flower
      update() {
        this.angle += this.angularVelocity;
      }

      // Display the flower
      display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);

        // Draw petals
        fill(this.petalColor);
        for (let i = 0; i < 6; i++) {
          let angle = map(i, 0, 6, 0, TWO_PI);
          let x = cos(angle + this.offset) * this.radius * 0.8;
          let y = sin(angle + this.offset) * this.radius * 0.8;
          ellipse(x, y, this.radius * 0.8);
        }

        // Draw center
        fill(this.centerColor);
        ellipse(0, 0, this.radius * 0.5);

        pop();
      }}