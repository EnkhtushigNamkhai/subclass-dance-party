class makeBlinkyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    var node = $('<span class="dancer"><img class="dolphin" src="https://d1v8u1ev1s9e4n.cloudfront.net/572cca1a5ccacf20bbe74f53" /></span>');
    super(top, left, timeBetweenSteps, node);
    this.name = 'dolphin';
    this.degrees = 0;
    var min = $('.topbar').height();
    var max = $('body').height() - $(this.$node).height();
    this.top = Math.floor(Math.random() * (max - min + 1) + min);
    this.step();
  }
  
  step() {
    super.step();
    var newStyle = {
      transform: `rotate(${this.degrees}deg)`
    };
    $(this.$node).css(newStyle);
    this.degrees -= 360;
  }

}

window.makeBlinkyDancer = makeBlinkyDancer;