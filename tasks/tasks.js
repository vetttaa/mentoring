const obj = {
  name: "John",
  [Symbol.iterator]() {
    const values = Object.values(this);
    let index = 0;
    return {
      next() {
        if (index < values.length) {
          return { value: values[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

let arr = Array.from(obj);
const [name] = arr;

const myArr = [1, 2, 3];
//1 true
const { 0: one, 1: two, 2: three } = myArr;
