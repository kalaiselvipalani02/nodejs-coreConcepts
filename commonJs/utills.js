// --- Commonjs ----//
//! Single Function Export
const firstName = "Alice";
const greet = (name) => {
  return `Hello ${firstName}`;
};

//module.exports = greet;
//! Object export
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
module.exports = {
  add,
  sub,
};
//!Named function export
module.exports.sayHi = (name) => {
  return `Hi ${name}`;
};

module.exports.sayBye = function (name) {
  return `Good Bye ${name}`;
};
//! using export shorthand
exports.sayHi = (name) => {
  return `Hi ${name}`;
};

exports.sayBye = function (name) {
  return `Good Bye ${name}`;
};
