function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Error: Cannot read property 'name' of undefined

//Данная ошибка появляется потому что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова.
