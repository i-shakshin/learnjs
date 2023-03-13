"use strict";

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

/*
Ответ: rabbit.

Поскольку this – это объект, который стоит перед точкой, rabbit.eat() изменяет объект rabbit.
*/
