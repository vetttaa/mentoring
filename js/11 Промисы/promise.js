let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); //1

//Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

//Являются ли фрагменты кода ниже эквивалентными?
promise.then(f1).catch(f2);
promise.then(f1, f2);

//Ответ: нет, первый код сможет обработать ошибку

//Выполнится ли .catch? Поясните свой ответ
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);//Error: Whoops
//т.к есть скрытый 'try...catch' вокруг функции и обрабатываются все синхронные операции