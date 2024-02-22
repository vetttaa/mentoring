const obj = {
  name: "Artem",
 // _age: Infinity
};

Object.defineProperty(obj, 'age', {
    get () {
      return this._age || Infinity
    },
    set (value) {
      this._age = value
    }
});

console.log(obj.age); // Infinity
obj.age = 35;
console.log(obj.age);

//1  Создайте объект product с свойством price и
//используйте Object.defineProperty для добавления дескриптора свойства price.
//Установите price как неконфигурируемое свойство, доступное только для чтения, и установите его значение равным 100.
//Попробуйте изменить значение price и удалить его, чтобы увидеть, как работает неконфигурируемое свойство.

const product = {
  price: null,
};
Object.defineProperty(product, "price", {
  value: 100,
  writable: false,
  configurable: false,
});
product.price = 200;
delete product.price;
console.log(product); //{price: 100}

//2 Создайте объект person с двумя свойствами: firstName и lastName.
// Используйте Object.defineProperties для добавления геттеров и сеттеров, которые позволят вам читать и изменять firstName и lastName через свойство fullName.
//Также убедитесь, что изменение firstName или lastName через геттеры и сеттеры корректно обновляет fullName.

const person = {
  firstName: "Ilya",
  lastName: "Ivanov",
};
Object.defineProperties(person, {
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      [this.firstName, this.lastName] = value.split(" ");
    },
  },
});
person.fullName = "Anton Antonov";
console.log(person); //{firstName: 'Anton', lastName: 'Antonov'}

//3 Создайте объект clock с функциональным свойством time, которое возвращает текущее время.
//Используйте Object.defineProperty для добавления геттера time, который возвращает текущее время в формате часов:минут:секунд.
//Попробуйте обратиться к clock.time и убедитесь, что вы получаете актуальное время.

const clock = {
  time() {
    return new Date().toTimeString();
  },
};
Object.defineProperties(clock, {
  time: {
    get() {
      return;
    },
  },
});
console.log(clock.time());

//5 Создайте объект employee с функциональным свойством fullName, которое позволяет читать и изменять полное имя сотрудника.
//Используйте синтаксис геттеров и сеттеров в литерале объекта для достижения этого.

const employee = {
  firstName1: "Ilya",
  lastName1: "Ivanov",

  get fullName() {
    return `${this.firstName1} ${this.lastName1}`;
  },
  set fullName(value) {
    let [name, surname] = value.split(" ");
    this.firstName1 = name;
    this.lastName1 = surname;
  },
};
console.log(employee.fullName);
employee.fullName = "Anton Antonov";
console.log(employee.fullName);
