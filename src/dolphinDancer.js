class makeDolphinDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    var node = $('<span class="dancer"><img class="dolphin" src="https://d1v8u1ev1s9e4n.cloudfront.net/572cca1a5ccacf20bbe74f53" /></span>');
    super(top, left, timeBetweenSteps, node);
    this.name = 'dolphin';
  }
  step() {
    super.step();
    var newTop = Math.random() * 500;
    var newStyle = {
      top: newTop
    };
    this.$node.css(newStyle);
  }
}





window.makeDolphinDancer = makeDolphinDancer;