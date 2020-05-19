var makeIronManDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

};

makeIronManDancer.prototype = Object.create(makeDancer.prototype);
makeIronManDancer.prototype.constructor = makeIronManDancer;

makeIronManDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};