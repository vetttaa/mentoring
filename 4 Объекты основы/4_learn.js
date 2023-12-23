//Объекты: основы

//!Объекты

/* let user = {
    name: "Alex",
    age: 24,
    "like birds": true,
}
user.name = 'Pete'
delete user.age
user["like birds"] = false

let key = "like game"
user[key] = true
console.log(user[key])
console.log(user)

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5,
};

console.log( bag.apple );  */

//1
/* let user = {
  name: "John",
  surname: "Smith",
}
user.name = "Pete"
delete user.name */
//2
/* function isEmpty(schedule) {
  for(let key in schedule) {
      return false
  }
     return true
 } */
//3
/*  let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
  let sum = 0
  for(let key in salaries){
    sum += salaries[key]
  }
    return sum */
//4

/* let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu){
  for(let key in menu) {
     typeof menu[key] == 'number' ? menu[key] *= 2 : false
  }
} */
//!Копирование объектов и ссылки
/* let user = {
  name: 'Alex',
  age: 20,
}
let clone = {}

for(let key in obj) {
  clone[key] = user[key]
}

clone.name = 'Pete'
.console.log(user.name);//Alex

let user = {name: 'John'}

let userAge = {age: 20}
let userDog = {dog: true}

object.assign(user, userAge, userDog) */

//!Методы объекта, "this"
//1
/* let calculator = {
  read() {
    this.x = +prompt("x", 0);
    this.y = +prompt("y", 0);
  },
  sum() {
    this.x + this.y;
  },
  mul() {
    this.x * this.y;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */

//2
/* let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { 
    alert( this.step );
    return this
  }
};
ladder.up().up().down().showStep().down().showStep(); */

//!Конструктор, оператор "new"
/* let obj = {};
function A() { return obj; }
function B() { return obj; }
//фукция возвращает объект и new вернет его вместо this

alert( new A() == new B() ); // true
alert( new A() === new B() ); // false
alert( new A() === new A() ); // false
alert( A === A ); // true */

/* function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();

console.log(calculator.sum() );
console.log(calculator.mul() ); */


/* function Accumulator(startingValue){
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('?', 1)
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
 */
