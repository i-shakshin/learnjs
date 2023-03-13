"use strict";

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true, берётся из rabbit.

delete rabbit.jumps;

console.log(rabbit.jumps); // null, берётся из animal.

delete animal.jumps;

console.log(rabbit.jumps); // undefined, такого свойства больше нет.
