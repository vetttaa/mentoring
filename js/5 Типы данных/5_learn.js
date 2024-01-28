// Числа

/*function twoSum () {
    let a = +prompt('a', '')
    let b = +prompt('b', '')
    let result = a + b

    console.log(result)
}
twoSum()*/

/*console.log((6.35*10).toFixed(10))
console.log(Math.round(6.35*10)/10)*/

/*function readNumber() {
    let answerPerson
    while(!isFinite(answerPerson)) {
        answerPerson = +prompt('number?', '') 
    }
    if(answerPerson === null || answerPerson === '') return null;
    return +answerPerson
}
alert(readNumber())*/

/*let i = 0;
while (i != 10) {
  i += 0.2;
}*/
//будет бесконечным т.к потеря точности из-за 0.2

/*function random(min, max) {
    return min + Math.random() * (max - min)
}*/

/*function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}*/

// Строки

/*function ucFirst(str) {
  if (!str) return str
  str = str[0].toUpperCase() + str.slice(1)
}*/

/*function checkSpam(str) {
  let lower = str.toLowerCase()
  return lower.includes('viagra') || lower.includes('xxx')
}*/

/*function truncate(str, maxlength) {
  if(str.length > maxlength) {
    return  str.slice(0, maxlength - 1) + '...'
  }
  return str
}
truncate('jfjfjf', 2)*/

/*function extractCurrencyValue(str) {
  let resultStr = str.slice(1);
  return +resultStr
}
extractCurrencyValue("$234");*/

// Массивы

/*let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4 */

/* let styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.shift()
styles.unshift('Рэп', 'Регги')
console.log(styles) */

/*let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // obj[method]() => a,b,function(){...} */

/*function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );*/

/*function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}*/

/*function camelize(str) {
  return str.split('-').map((s, index) => i == 0 ? s : s[0].toUpperCase() + s.slice(1)).join('')
}*/

/*function filterRange(arr, a, b) {
  return arr.filter((i) => (a <= i && i <= b))
}*/

/*function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}*/

/*let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
*/

/*function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);*/

/*
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
*/

/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
*/

/*
function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);
*/

/*
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
*/

/*
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
*/

/*
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
*/

/*
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
*/

// Методы массивов

// Перебираемые объекты

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
for (let num of range) {
  console.log(num);
}
