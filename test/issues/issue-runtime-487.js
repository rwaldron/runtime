var tap = require('../tap');

tap.count(4);

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


test = new Array();
props = [];

for (var prop in test) {
  props.push(prop);
}

tap.eq(props.length, 0);

test.push(1);

for (var prop in test) {
  props.push(prop);
}

tap.eq(props.length, 1);
tap.eq(props[0], 1);

