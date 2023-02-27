let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

alert(fruits.length); // 4, потому что shoppingCart и fruits ссылаются на один и тот же объект (массивы являются объектами)
