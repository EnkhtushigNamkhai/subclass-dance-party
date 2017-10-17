var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
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

};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

//
makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var newTop = Math.random() * 500;
  var newStyle = {
    top: newTop
  };
  this.$node.css(newStyle);
  // console.log(this.setPosition);
  // this.setPosition = this.setPosition.bind(this);
  
};


makeBouncyDancer.prototype.constructor = makeBouncyDancer;