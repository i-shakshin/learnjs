"use strict";

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

/*
   добавим собственное свойство stomach для каждого объекта,
   чтобы свойство stomach не бралось из прототипа
*/

// Шустрый хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// Живот ленивого хомяка пуст
alert(lazy.stomach); // <ничего>
