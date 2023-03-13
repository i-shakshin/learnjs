"use strict";

{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  Rabbit.prototype = {};

  console.log(rabbit.eats);
} // true

/*
Присвоение нового значения свойству Rabbit.prototype влияет 
на [[Prototype]] вновь создаваемых объектов, но не на прототип уже существующих.
*/

{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  Rabbit.prototype.eats = false;

  console.log(rabbit.eats);
} // false.
/*
Объекты присваиваются по ссылке. 

Таким образом, когда мы изменяем этот объект по одной ссылке, изменения видны и по другой.
*/
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  delete rabbit.eats;

  alert(rabbit.eats);
} // true
/*
Операция delete применяется к свойствам конкретного объекта, на котором она вызвана.
Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет.
Таким образом, просто ничего не произойдёт.
*/
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  delete Rabbit.prototype.eats;

  alert(rabbit.eats);
} // undefined

// Свойство eats удалено из прототипа, оно больше не существует.
