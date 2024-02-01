//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
function printNumbers(from, to) {
    let current = from;
    setTimeout(function number() {
        console.log(current);
        if (current < to) {
            setTimeout(number, 1000);
        }
        current++;
    }, 1000);
}

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}