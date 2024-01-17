//Полифил map

module.exports = function () {
    if(!Array.prototype.myMap) {
        Array.prototype.myMap = function(callback) {
            if(!(this instanceof Array || this instanceof String)) {
                throw new TypeError("this is not an array")
            }

            if(typeof callback !== "function") {
                throw new TypeError(`${callback} is not a function`)
            }

            const result = []
            for(let i = 0; i < this.length; i++) {
                this[i].push(callback(this[i], i, this))
            }
            return result
        }

    }


}
/* const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = arr.map((value, index, array) => {
    //Calculation
    return value
}) */