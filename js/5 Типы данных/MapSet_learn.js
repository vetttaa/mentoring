// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr1) {
  return Array.from(new Set(arr1));
}

let arr1 = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

unique(arr1);

// Напишите функцию aclean(arr), которая возвращает массив слов,
// очищенный от анаграмм.( слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.)

function aclean(arr) {
  let map = new Map();
  for (anagramm of arr) {
    let anagrammSort = anagramm.toLowerCase().split("").sort().join("");
    map.set(anagrammSort, anagramm);
  }
  console.log(map);
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
aclean(arr);

// Мы хотели бы получить массив ключей map.keys() в переменную
// и далее работать с ними, например, применить метод .push.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
console.log(keys);

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// map.set("more");
keys.push("more");
