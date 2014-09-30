var tap = require('../tap');

tap.count(2);

function Test() {
  this.alpha = "hi";
};

Test.prototype.echo = function() {
  return 1;
};

var test = new Test();
var props = [];

for (var prop in test) {
  props.push(prop);
}

tap.eq(props.length, 2);
