"use strict";

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2]();

/*
 Выведет function() {
  alert( this );
}
У нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив
*/
