var makeWavyDancer = function(top, left, timeBetweenSteps) { 
  let node = $('<span class="dancer"><img class="dolphin" src="https://d1v8u1ev1s9e4n.cloudfront.net/572cca1a5ccacf20bbe74f53" /></span>');
  let topBoundary = 600 + (Math.random() * 100);
  let leftBoundary = 100 + (Math.random() * 50);
  makeDancer.call(this, topBoundary, leftBoundary, timeBetweenSteps, node);
  this.name = 'dolphin';
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
  // }; 
  this.down = false;
  this.right = true;
};

makeWavyDancer.prototype = Object.create(makeDancer.prototype);

//
makeWavyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
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
};

makeWavyDancer.prototype.constructor = makeWavyDancer;