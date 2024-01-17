//Полифил at

const num = [1, 2, 3]
const food = ['pasta', 'chicken', 'cheese']

Array.prototype.at = function(index) {
    if(index < 0) {
        return this[this.length - index]
    }
    return this[index];
}
console.log(num.at(0));//1
console.log(num.at(1));//2

console.log(food.at(0))//pasta
console.log(food.at(-1))//cheese