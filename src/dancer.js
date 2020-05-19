// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  //this = newInstance
  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this.callCount = 0;
  this.step();
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // return dancer;
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // console.log(this.step);
  // it just schedules the next step
  // this.callCount = 0;
  // var newInstance = this;
  // setTimeout(function() {
  //   newInstance.step();
  // }, this.timeBetweenSteps); // might need to change newInstance to this
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // this.callCount++;
};
// makeDancer.prototype.step.callCount = 0;

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
