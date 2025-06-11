//default export
/*import greet from "./utills.mjs";
console.log(greet("Alice"));*/
//named export
/*import { add, sub } from "./utills.mjs";

console.log(add(5, 10));
console.log(sub(5, 10));*/

//Mixed export
/*import greet, { mul } from "./utills.mjs";

console.log(greet("Agnes"));
console.log(mul(13, 2));*/

//import everything
import * as utill from "./utills.mjs";
console.log(utill.div(5, 1));
console.log(utill.mod(5, 1));
