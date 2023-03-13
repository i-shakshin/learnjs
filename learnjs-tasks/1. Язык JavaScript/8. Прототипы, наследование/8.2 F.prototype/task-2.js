"use strict";
{
  function User(name) {
    this.name = name;
  }

  let user = new User("John");
  let user2 = new user.constructor("Pete");

  console.log(user2.name);
} // Pete

// Пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
{
  function User(name) {
    this.name = name;
  }
  User.prototype = {}; // (*)

  let user = new User("John");
  let user2 = new user.constructor("Pete");

  alert(user2.name);
} // undefined

// Пример функции-конструктора для объекта obj, с которой такой вызов  сработает некорректно.
