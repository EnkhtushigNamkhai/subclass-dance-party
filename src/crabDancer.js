var makeCrabDancer = function(top, left, timeBetweenSteps) { 
  node = $('<span class="dancer"><img class="crab" src="http://rs276.pbsrc.com/albums/kk28/mnstrkpixels/disney%20pixels/the%20little%20mermaid/Sebastian.gif~c200" /></span>');
  makeDancer.call(this, 700, left, timeBetweenSteps, node);
  this.name = 'crab';
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // }; s
  this.down = false;
  this.right = true;
};

makeCrabDancer.prototype = Object.create(makeDancer.prototype);

//
makeCrabDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

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
};

makeCrabDancer.prototype.constructor = makeCrabDancer;