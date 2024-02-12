const obj = {
    name: 'John',
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.name;
        }
    }
}
//2 false
const arr = [obj]
const [name] = arr


const myArr = [1, 2, 3];

//1 true
const {0: one, 1: two, 2: three} = myArr


