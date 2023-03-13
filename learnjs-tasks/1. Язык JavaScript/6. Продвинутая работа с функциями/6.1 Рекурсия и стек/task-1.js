"use strict";

// С использованием цикла.
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(100));

// С использованием формулы арифметической прогрессии.
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(100));
