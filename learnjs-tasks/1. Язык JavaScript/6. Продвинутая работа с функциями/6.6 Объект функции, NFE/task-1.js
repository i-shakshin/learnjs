"use strict";

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

counter.set(10); // 10

counter(); // 11

counter.decrease(); // 10

console.log(counter());
