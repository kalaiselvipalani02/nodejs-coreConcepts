//default export
/*export default function (name) {
  return `Hello ${name}`;
}*/

//named export
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

//mixed export - default + named
export default function (name) {
  return `Hi ${name}`;
}
export function mul(a, b) {
  return a * b;
}

//export everything

export function div(a, b) {
  return a / b;
}
export function mod(a, b) {
  return a % b;
}
