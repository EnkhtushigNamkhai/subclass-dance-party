class makeCrabDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    var node = $('<span class="dancer"><img class="crab" src="http://rs276.pbsrc.com/albums/kk28/mnstrkpixels/disney%20pixels/the%20little%20mermaid/Sebastian.gif~c200" /></span>');
    super(700, left, timeBetweenSteps, node);
    this.name = 'crab';
    this.down = false;
    this.right = true;
  }

  step() {
    super.step();

    var windowHeight = $('body').height();
    var crabHeight = $(this.$node).height();
    var max = (windowHeight - crabHeight);
    var min = max - 100;
    this.top = Math.floor(Math.random() * (max - min + 1) + min); 
    
    
    if (this.left > 800) {
      this.right = false;
    } else if (this.left < 200) {
      this.right = true;
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


window.makeCrabDancer = makeCrabDancer;