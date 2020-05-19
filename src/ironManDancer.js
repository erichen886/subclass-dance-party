var makeIronManDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="ironMan"> </span>');
  this.setPosition (top, left);
};

makeIronManDancer.prototype = Object.create(makeDancer.prototype);
makeIronManDancer.prototype.constructor = makeIronManDancer;

makeIronManDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.$node;
};