let code = 'console.log("1")'
eval(code)//1

let value = eval('let i = 0; ++i')
console.log(value)//1

let a = 1;
function f() {
    eval('console.log(a)')
}
f()//1

let x = 5;
eval('x = 10')
console.log(x)//10 изменение значения

eval('let = 5; function() {}')
console.log(typeof x)//undefined и функция f тоже невидима

let y = 1;
{
    let y = 5;
    window.eval('console.log(y)') //1 глобальная переменная
}

let f = new Function('a', 'console.log(a)')
f(5)//5


// Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического выражения и возвращает результат его вычисления.
// В этой задаче нет необходимости проверять полученное выражение на корректность, просто вычислить и вернуть результат.

let calc = prompt("Выражение?", '4+2*3-1')
console.log(eval(calc))