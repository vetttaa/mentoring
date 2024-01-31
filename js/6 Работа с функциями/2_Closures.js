//Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

let work = makeWorker();

work(); // Pete

//Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
//Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1

//Здесь объект счётчика создан с помощью функции-конструктора.
//Будет ли он работать? Что покажет?
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter3 = new Counter();

alert( counter3.up() ); // 1
alert( counter3.up() ); // 2
alert( counter3.down() ); // 1

//Какой будет результат у вызова на последней строке?
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();//Hello, John

//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b
function sum(a) {
    return function(b) {
        return a + b;
    }
}
console.log(sum(1)(2));

//Что выведет данный код?
let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();

//У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

//Сделайте набор «готовых к употреблению» фильтров:

//inBetween(a, b) – между a и b (включительно).
//inArray([...]) – находится в данном массиве.
//Они должны использоваться таким образом:

//arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
//arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

function inBetween(a, b) { 
  return function(x) {
    return x >= a && x <= b;
  }
}
function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}
//Напишите функцию byField, которая может быть использована для сортировки по полю
function byField(fieldName){
  return function(a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  }
}

function makeArmy() {
  let shooters = [];

  let i = 0;
  for(let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.