class makeFlounderDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    let node = $('<span class="dancer"><img class="flounder" src="http://rs276.pbsrc.com/albums/kk28/mnstrkpixels/disney%20pixels/the%20little%20mermaid/cutefish.gif~c200" /></span>');
    let topBoundary = 600 + (Math.random() * 100);
    let leftBoundary = 100 + (Math.random() * 50);
    super(topBoundary, leftBoundary, timeBetweenSteps, node);
    this.name = 'flounder';
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


//

window.makeFlounderDancer = makeFlounderDancer;