// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;
alert(name); // John
alert(age); // 30
alert(isAdmin); // false

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(salaries) {
  let highSalary = 0;
  let nameSalaries = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (highSalary < salary) {
      highSalary = salary;
      nameSalaries = name;
    }
  }
  return highSalary;
}
topSalary(salaries);
