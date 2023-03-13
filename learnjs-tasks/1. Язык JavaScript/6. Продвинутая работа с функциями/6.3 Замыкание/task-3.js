"use strict";

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

/*
Результатом будет ошибка. ReferenceError: sayHi is not defined
Функция sayHi объявлена внутри if, так что она живёт только внутри этого блока. Снаружи нет sayHi
*/
