var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  makeDancer.apply(this, arguments);
  // console.log(arguments);
  // MakeDancer.call(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  // console.log(this.step);
  // this.oldStep = this.step;
  // console.log(this.oldStep);
  // this.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   // this.oldStep.call(this);
  //   this.oldStep;
  //   // console.log(this.callCount);
  //   // this.callCount++;
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   this.$node.toggle();
  // };

};

//need to delegate back to makeDancer?
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // console.log(this.oldStep)
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // this.oldStep;
  // this.callCount++;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};