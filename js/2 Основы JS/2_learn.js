//! Привет, мир!
/* alert("Я JavaScript!"); */

//! Строгий режим — "use strict"

//! Переменные
/* let admin
let name 
name = 'John'
admin = name 
alert(admin) */

//! Типы данных
/* let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya */

//! Взаимодействие: alert, prompt, confirm
/* let name = prompt("Как вас зовут?", "");
alert(`Привет, ${name}!`); */

//! Преобразование типов
/* typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null //  "object"  (2)
typeof alert // "function"  (3)
typeof []// "object"
typeof function () {} // "function"
typeof {} // "object"

Number(0)// 0
Number(false)// 0
Number(true)// 1
Number(null)// 0
Number(undefined)// NaN
Number(NaN)// NaN
Number([])// 0
Number('')// 0
Number({})//NaN
Number('123')// 123
Number('123.45')// 123.45
Number('0xFF')// 255
Number('j123')// NaN


String(0)// "0"
String(false)// "false"
String(true)// "true"
String(null)// "null"
String(NaN)// "NaN"
String(undefined)// "undefined"

Boolean(0)// false
Boolean(false)// false
Boolean(true)// true
Boolean(null)// false
Boolean(NaN)// false
Boolean(undefined)// false
Boolean('')// false
 */
//! Базовые операторы, математика
/* let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
alert( a ) // 2
alert( b ) // 2

let s = 2;
let x = 1 + (s *= 2);//5 

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b); // 12
*/

/* "" + 1 + 0//"10"
"" - 1 + 0//"-1"
true + false//"1"
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//"9px"
"$" + 4 + 5//"$45"
"4" - 2//2
"4px" - 2//NaN
"  -9  " + 5//"-95"
"  -9  " - 5//-14
null + 1//1
undefined + 1//NaN
" \t \n" - 2//-2 */

// Операторы сравнения
/* 5 > 4//true
"ананас" > "яблоко"//true
"2" > "12"//true
undefined == null//true
undefined === null //false
null == "\n0\n"//true
null === +"\n0\n"// false */

//! Условное ветвление: if, '?'
/* let result = prompt("Какое «официальное» название JavaScript?", "");
if(result == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
} */

/* let num = prompt('Введите число', '');
if (num > 0) {
  alert( 1 );
} else if (num < 0) {
  alert( -1 );
} else {
  alert( 0 );
} */
/* 
return (a + b < 4) ? "Мало" : "Много"; */

/* return login == "Сотрудник"
  ? "Привет"
  : login == "Директор"
  ? "Здравствуйте"
  : login == ""
  ? "Нет логина"
  : ""; */

//! Логические операторы
/* alert(null || 2 && undefined); // 2
alert( alert(1) || 2 || alert(3) );//1 2
alert( 1 && null && 2 );//null
alert( alert(1) && alert(2) );//1 undefined
alert( null || 2 && 3 || 4 );//3
let value = NaN;
value &&= 10;//10
value ||= 20;//10
value &&= 30;//30
value ||= 40;//30 */

/* let age = prompt("Сколько вам лет?", "");
if(age >= 14 && age <= 90) {
  alert("Вам ещё совершеннолетний");
}else {
  alert("Вам ещё нет совершеннолетия");
}

if(!(age >= 14 && age <= 90)) */

/* if (-1 || 0) alert( 'first' );//first
if (-1 && 0) alert( 'second' );//-
if (null || -1 && 1) alert( 'third' );//first */

//! Операторы нулевого слияния и присваивания: '??', '??='
/* let height = null
height = height ?? 100;//100 */

//! Циклы while и for
/* let i = 3;

while (i) {
  alert( i-- );
}//3, 2, 1 */

/* let i = 0;
while (++i < 5) alert( i );//1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i );//1, 2, 3, 4, 5 */

/* for (let i = 0; i < 5; i++) alert( i );//0,1,2,3,4
for (let i = 0; i < 5; ++i) alert( i );//0,1,2,3,4 */

/* for(let i = 2; i <= 10; i++) {
  if(i % 2 == 0) {
    return i
  }
} */

/* let i = 0
while(i < 3) {
  alert( `number ${i}!` );
  i++;
} */

/* let num
do {
  num prompt('число', 0)
}while(num <= 100 && num) */
/* let n = 10
nextPrime:
for(let i = 2; i <= n; i++) {
  for(let j = 2; j < i; j++) {
    if(i % j == 0) continue nextPrime
  }
  console.log(i)
} */

//! Конструкция "switch"
/* if(browser == "Edge") {
  alert( "You've got the Edge!" );
}else if (browser == "Edge" 
|| browser == 'Firefox' 
|| browser == 'Safari' 
|| browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
}else {
  alert( 'We hope that this page looks ok!' );
} */

/* switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
} */

//! Функции

/* function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?')
} */

/* function min(a, b) {
  return a < b ? a : b
} */

/* function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x", "");
let n = prompt("n", "")

(n >= 1 && n % 1 == 0)
  ? alert(pow(x, n))
  : alert(`${n} не подходит`); */

//! Стрелочные функции, основы

/*  function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
); */