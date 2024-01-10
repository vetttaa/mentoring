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
// Методы массивов

// Перебираемые объекты
// Map и Set
// WeakMap и WeakSet
// Object.keys, values, entries
// Деструктурирующее присваивание
// Дата и время
// Формат JSON, метод toJSON
