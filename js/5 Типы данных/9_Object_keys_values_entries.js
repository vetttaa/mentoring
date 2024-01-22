// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0)
     
}
sumSalaries(salaries)

// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let user = {
    name: 'John',
    age: 30
  };
  
function count(user) {
    return Object.keys(user).length
}
count(user)