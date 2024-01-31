//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTwo(n) {
    let sum = 0
for(let i = 0; i < n; i++){
    sum += n
} 
return sum
}

function sumTo(n) {
    n === 1 ? 1 : n + sumTo(n - 1)
}

function sumTo(n) {
    return n * (n + 1) / 2;
  }

//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(n) {
    n !== 1 ? n * factorial(n - 1) : 1
}

//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
function fib(n) {
    n === 1 ? 1 : n === 2 ? 1 : fib(n - 1) + fib(n - 2) 
}
//Напишите функцию printList(list), которая выводит элементы списка по одному.
//Сделайте два варианта решения: используя цикл и через рекурсию.
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
function printList(list) {
    while(list) {
        alert(list.value);
        list = list.next;
      }
}
function printList(list) {
    console.log(list.value)
    if(list.next) {
        printList(list.next)
    }
}
//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//Сделайте два решения: с использованием цикла и через рекурсию.
let list2 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list2) {
  
    if (list2.next) {
      printReverseList(list2.next);
    }
    console.log(list2.value);
  }


  function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  }