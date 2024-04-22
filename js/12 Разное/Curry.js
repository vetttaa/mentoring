function curry(f) {
    return function(a){
        return function(b) {
            return f(a, b);
        };
    };
}

//использование

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum)
console.log(curriedSum(1)(2))//3

//_.curry из lodash

function sum(a, b) {
    return a + b;
}

let curriedSum2 = _.curry(sum)

console.log(curriedSum2(1, 2))//3 можем вызывать как обычно
console.log(curriedSum2(1)(2))//3 можем вызывать частично

//продвинутая реализация 

function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length){
            return func.apply(this, args)
        }else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function sum(a, b, c) {
    return a + b + c 
}

let curriedSum3 = curry(sum)
console.log(1, 2, 3)//6 обычный вызов
console.log((1)(2, 3))//6 каррирование первого аргумента
console.log((1)(2)(3))//6 каррирование всех аргументов
