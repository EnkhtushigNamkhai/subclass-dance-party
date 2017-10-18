class makeWavyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    let node = $('<span class="dancer"><img class="dolphin" src="https://d1v8u1ev1s9e4n.cloudfront.net/572cca1a5ccacf20bbe74f53" /></span>');
    let topBoundary = 600 + (Math.random() * 100);
    let leftBoundary = 100 + (Math.random() * 50);
    super(topBoundary, leftBoundary, timeBetweenSteps, node);
    this.name = 'dolphin';
    this.down = false;
    this.right = true;
  }

  step() {
    super.step();
    // go up and right
    if (this.top < 200) {
      this.down = true;
    } else if (this.top > 900) {
      this.down = false;
    }

    if (this.left > 800) {
      this.right = false;
    } else if (this.left < 200) {
      this.right = true;
    }

    if (!this.down) {
      this.top -= 60;
    } else if (this.down) {
      this.top += 60;
    }

    if (this.right) {
      this.left += 60;
    } else if (!this.right) {
      this.left -= 60;
    }

    var newStyle = {
      top: this.top,
      left: this.left
    };
    this.$node.css(newStyle);
  }
  
} 

window.makeWavyDancer = makeWavyDancer;