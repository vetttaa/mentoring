//Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
//Каждый вызов должен сохраняться как массив аргументов.

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

//Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например
function delay(f, ms) {
    function wrapper(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
    return wrapper
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

//Напишите функцию debounce(f, ms), которая возвращает обёртку,
//При вызове он планирует вызов исходной функции через указанное количество ms и отменяет предыдущий такой тайм-аут.
function debounce(f, ms) {
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => f.apply(this, args), ms)
    }
}
//