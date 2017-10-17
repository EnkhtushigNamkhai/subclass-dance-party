// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="https://d1v8u1ev1s9e4n.cloudfront.net/572cca1a5ccacf20bbe74f53" /></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.timer;
  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);
  this.getClosestDancer(); 

};

makeDancer.prototype.getClosestDancer = function() {
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
  });
};

makeDancer.prototype.lineup = function(i) {  
  clearTimeout(this.timer);
  this.top = $('body').height() / 2;
  this.left = ((i + 1) * 50);
  let newStyle = {
    top: this.top,
    left: this.left
  };
  this.$node.css(newStyle);
};

makeDancer.prototype.step = function() {
  let fn = this.step.bind(this);
  this.timer = setTimeout(fn, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top,
    left
  };
  
  this.$node.css(styleSettings);
};