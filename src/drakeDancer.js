var makeDrakeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="dancer" id="drake"><img src="drake.png" ></img> </span>');
  this.setPosition (Math.random() * 200, Math.random() * 200);

};

makeDrakeDancer.prototype = Object.create(makeDancer.prototype);
makeDrakeDancer.prototype.constructor = makeDrakeDancer;

makeDrakeDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

//<img src="https://www.puppyschoolapp.co.uk/wp-content/uploads/sites/35/2016/06/puppy-img-02-300x212.jpg"  width="300" height="210"></img>

// makeDrakeDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: top,
//     left: left,
//     transform: scaleX(-1)
//   };
//   this.$node.css(styleSettings);
// };

/*  */