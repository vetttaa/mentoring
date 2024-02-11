//Какие значения показываются в процессе выполнения кода?
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); //true ? (1)

delete rabbit.jumps;

alert(rabbit.jumps); //null (2)

delete animal.jumps;

alert(rabbit.jumps); //undefined (3)

//С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
//Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
//бъект rabbit наследует от объекта animal.
//Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal1 = {
  eat() {
    this.full = true;
  },
};

let rabbit1 = {
  __proto__: animal1,
};

rabbit1.eat(); //rabbit.eat()

//У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
//Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
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

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple

//let obj2 = new obj.constructor();
function User(name) {
  this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

alert(user2.name);

//Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};
function f() {
  console.log("Hello!");
}
f.defer(1000);

//Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};
function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);

//Все эти вызовы делают одно и тоже или нет?
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit2 = new Rabbit("Rabbit");

rabbit2.sayHi(); // Rabbit
Rabbit.prototype.sayHi();//undefined
Object.getPrototypeOf(rabbit2).sayHi();//undefined
rabbit2.__proto__.sayHi();//undefined

//Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
//Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) alert(key);

alert(dictionary.toString());