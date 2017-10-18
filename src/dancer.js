// Creates and returns a new dancer object that can step
class makeDancer {
  constructor(top, left, timeBetweenSteps, node) {
    this.$node = node;
    this.timeBetweenSteps = timeBetweenSteps;
    this.top = top;
    this.left = left;
    this.timer;
    this.step();
    this.setPosition(this.top, this.left);
    this.getClosestDancer(); 
  }

  getClosestDancer() {
    var context = this;
    $(this.$node).on('click', function() {
      var myTop = context.top;
      var myLeft = context.left;
      let currentDiagnoalDiff = Infinity; 
      let closestDancer;
      window.dancers.forEach(dancer => {
        if (dancer !== context) {
          var currentTop = dancer.top;
          var currentLeft = dancer.left;
          var Ydiff = Math.abs(myTop - currentTop);
          var Xdiff = Math.abs(myLeft - currentLeft);
          var DiagonalDiff = Math.sqrt(Math.pow(Ydiff, 2) + Math.pow(Xdiff, 2));
          if (DiagonalDiff < currentDiagnoalDiff) {
            currentDiagnoalDiff = DiagonalDiff;
            closestDancer = dancer;
          }
        }
      });
      var newStyle = {
        top: 200
      };
      closestDancer.$node.css(newStyle);
      context.$node.css(newStyle);
      clearTimeout(closestDancer.timer);
      clearTimeout(context.timer);
    });
  }

  lineup(i) {
    clearTimeout(this.timer);
    this.top = $('body').height() / 2;
    this.left = ((i + 1) * 50);
    let newStyle = {
      top: this.top - $(this.$node).height(),
      left: this.left
    };
    this.$node.css(newStyle);
  }

  step() {
    let fn = this.step.bind(this);
    this.timer = setTimeout(fn, this.timeBetweenSteps);
  }
  
  setPosition(top, left) {
    var styleSettings = {
      top,
      left
    };
    
    this.$node.css(styleSettings);
  }

}

