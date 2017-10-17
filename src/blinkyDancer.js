var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  let node = $('<span class="dancer"><img class="dolphin" src="https://d1v8u1ev1s9e4n.cloudfront.net/572cca1a5ccacf20bbe74f53" /></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);
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
  this.mouseOver();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

//
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

makeBlinkyDancer.prototype.mouseOver = function() {
  this.$node.on('mouseover', function() {
    ($(this)).addClass('grow');
  });
};

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;