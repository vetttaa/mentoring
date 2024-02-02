//Что выведет функция?
function f() {
    alert( this ); // null
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();
//Можем ли мы изменить this дополнительным связыванием?
//Что выведет этот код?
function f() {
    alert(this.name);//Вася
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
  f();
  //В свойство функции записано значение. Изменится ли оно после применения bind? 
  function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // undefined так как нет свойства test в объекте после применения bind

//Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
//Однако, его вызов приводит к ошибке. Почему?
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user1 = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user1.loginOk.bind(user), user1.loginFail.bind(user));

//Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
//Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user2 = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(() => user2.login(true), () => user2.login(false)); 