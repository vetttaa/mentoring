const obj = {
    name: 'John',
}

const myArr = [1, 2, 3];

//true
const {0: one, 1: two, 2: three} = myArr

//false
const arr = Object.values(obj);
const [name] = arr