// lib/math.js
export function sum(x, y) {
    return x + y;
  }
  export var pi = 3.141593;
  // app.js
  import * as math from "lib/math";
  alert("2π = " + math.sum(math.pi, math.pi));
  // otherApp.js
  import {sum, pi} from "lib/math";
  alert("2π = " + sum(pi, pi));
  
  //Some additional features include export default and export *:
  
  // lib/mathplusplus.js
  export * from "lib/math";
  export var e = 2.71828182846;
  export default function(x) {
      return Math.log(x);
  }
  // app.js
  import ln, {pi, e} from "lib/mathplusplus";
  alert("2π = " + ln(e)*pi*2);