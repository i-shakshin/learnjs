let str = "Привет";

str.test = 5;

alert(str.test);

//На экран выведется "TypeError: Cannot create property 'test' on string 'Привет'", потому что примитивы не являются объектами
