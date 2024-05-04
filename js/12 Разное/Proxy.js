//Object

const person = {
  name: "Vi",
  age: 21,
};

const op = new Proxy(person, {
  get(target, prop) {
    console.log("Target", target);
    console.log("Prop", prop);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  has(target, prop) {
    //true/false есть ли свойство в объекте
    return ["age", "name"].includes(prop);
  },
  defineProperty(target, prop) {
    console.log("Deleting...", prop);
    delete target[prop];
    return true;
  },
});
//get
op.name; //Vi
//Target {name...}
//Prop name
op.age; //21
//Target {name...}
//Prop age

//set
op.age = 22;
op; //Proxy{...age: 22}

op.qq = 2; //Error

//has
"name" in op; //true
"name1" in op; //false

//deleteProperty
delete op.age;
//Deleting...age
//true

//Function

const log = (text) => `Log ${text}`;

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    //функция, контекст, параметры
    console.log("Calling fn...");

    return target.apply(thisArg, args);
  },
});
fp();
//Calling fn...
//Log: undefined
fp("TEST");
////Log: TEST



//Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const PersonProxy = new Proxy(Person, {
  //отследить инициализацю нового класса
  construct(target, args) {
    console.log("Construct...");

    return new target(...args); //new Person
  },
});

const p = new PersonProxy("Maxim", 30);
//p Person{name: "Maxim", age: 30}


const PersonProxy2 = new Proxy(Person, {
    //отследить инициализацю нового класса
    construct(target, args) {
      console.log("Construct...");

      return new Proxy(new target(...args), {
        get(target, prop) {
            console.log(`Getting prop ${prop}`)
            return target[prop]
        }
      })
    },
  });
  
  const p2 = new PersonProxy2("Maxim", 30);
  //p2 Proxy{name: "Maxim", age: 30}


  // создайте ловушку, которая делает доп. действия при записи и чтении

const person2 = {
  name: 'Vi',
}

const proxyPerson = new Proxy(person2, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`)
    return target[prop]
  },
  set(target, prop, value) {
    console.log(`Setting prop ${prop} to ${value}`)
    target[prop] = value
  }
});

console.log(proxyPerson.name)//get
proxyPerson.name = 'Veta'//set


// создайте ловушку, которая пересчитывает полное имя при изменении фамилии или имени

const person3 = {
  firstName: 'Ivan',
  lastName: 'Ivanov'
}

let proxyPerson = new Proxy(person3, {
  set(target, prop, value) {
    if (prop === 'firstName' || prop === 'lastName') {
      target[prop] = value
      target.fullName = `${target.firstName} ${target.lastName}`
    }
    return true
  }
})
proxyPerson.firstName = 'Petr'
proxyPerson.lastName = 'Petrov'
console.log(proxyPerson.fullName)//Petr Petrov


