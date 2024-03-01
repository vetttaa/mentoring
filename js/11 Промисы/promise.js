class Promise {
  constructor(executor) {
    this.state = PENDING;
    this.result = undefined;

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
      }
    };
    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFullfield, onRejected) {
    if (onFullfield && this.state === FULFILLED) {
      onFullfield(this.result);
    }
    if (onRejected && this.state === REJECTED) {
      onRejected(this.result);
    }
  }
}

// 1. Конструктор на вход которого записывается callback
// в свойствах котого две функции resolve - успешно, reject - ошибка,
// которые можно выполнить и изменить состояние
console.log(1);
const promise1 = new Promise((resolve, reject) => {
  console.log(2);
  resolve("success");
});
console.log(3);
console.log(promise); //1 2 3 Promise {<fulfilled>: 'success'}

// 2. Используется для отложенного кода
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 1000);
});
console.log(promise2); //Promise{<pending>}

setTimeout(() => console.log(promise2), 2000); //Promise{<fulfilled>: 'success'}

// 3. Resolve, reject можно вызвать только один раз
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 2000);
  setTimeout(() => resolve("success2"), 1000);
  resolve("success");
});
console.log(promise3); //Promise {<fulfilled>: 'success'}
setTimeout(() => console.log(promise3), 3000); //Promise {<fulfilled>: 'success'}

const promise33 = new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 2000);
  setTimeout(() => resolve("success2"), 1000);
});
console.log(promise33); //Promise {<pending>}
setTimeout(() => console.log(promise33), 3000); //Promise {<fulfilled>: 'success2'}

//4. Чтобы перехватить знчение используется метод then

const promise4 = new Promise((resolve, reject) => {
  resolve("success2")
}).then((value) => {
  console.log(value);//success2
});

const promise44 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success2")
  }, 100);
}).then((value) => {
  console.log(value);//undefined success2
});

//-----------------

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
new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert); //Error: Whoops
//т.к есть скрытый 'try...catch' вокруг функции и обрабатываются все синхронные операции

//callback hell
function fetchUserInfo(callback) {
  setTimeout(() => {
    //fetch
    const data = { id: 1, name: "Ilya" };
    callback(data);
  }, 1000);
}

function fetchUserGames(id, callback) {
  setTimeout(() => {
    //fetch(id)
    const data = ["game1", "game2"];
    callback(data);
  }, 1000);
}
//callback hell
function run() {
  fetchUserInfo((userInfo) => {
    console.log(userInfo); //{ id: 1, name: "Ilya" };

    fetchUserGames(userInfo.id, (userGames) => {
      console.log(userGames); //['game1', 'game2' ];
    });
  });
}

function run() {
  console.log(1);

  const data = new Promise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
      //fetch
      const data = { id: 1, name: "Ilya" };
      console.log(3);
      resolve(data);
      console.log(4);
    }, 1000);
  });
  console.log(5);

  data.then((userData) => {
    console.log(userData);
    console.log(6);
  });
  console.log(7);
}
//1 2 5 7 3 5 6

function fetchUserData() {
  return new Promise(() => {
    setTimeout(() => {
      //fetch
      const data = { id: 1, name: "Ilya" };
      resolve(data);
    }, 1000);
  });
}
function fetchUserGames(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //fetch
      const data = ["game1", "game2"];
      resolve(data);
    }, 1000);
  });
}
function run() {
  fetchUserData()
    .then((userData) => {
      return fetchUserGames(userData.id);
    })
    .then((userGames) => {
      console.log(userGames);
    });
}
run();
