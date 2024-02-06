Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  console.log(context);
  context.fn = this;
  const result = context.fn(...args);
  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  context = context || window;
  context.fn = this;
  return function () {
    return context.fn(...args);
  };
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myCall(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);

function Toy(name, price) {
  Product.myApply(this, [name, price]);
  this.category = "toy";
}

console.log(new Toy("doll", 3).name);

function Car(name, price) {
  Product.myBind(this, name, price)();
  this.category = "car";
}

console.log(new Car("bmw", 10).name);
