const obj = {
    name: 'John',
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return 'John';
        }
    }
}
//2 false
const [name] = arr


const myArr = [1, 2, 3];

//1 true
const {0: one, 1: two, 2: three} = myArr


