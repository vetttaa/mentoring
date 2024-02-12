// 1
(function immediateA(a) {
    return (function immediateB(b) {
      console.log(a); //другая область видимости
    })(1);
  })(0); //0
  
  // 2
  let count = 0;
  (function immediate() {
    if (count === 0) {
      let count = 1; //Объявление в локальной области видимости
      console.log(count); //1
    }
    console.log(count); //0 
  })(); // 1 0
  
  // 3
  for (var i = 0; i < 3; i++) { //var не ограничен блоком кода
    setTimeout(function log() {
      console.log(i); // 3 3 3
    }, 1000);
  } 
  
  // 4
  function createIncrement() {
    let count = 0;
    function increment() { 
      count++;
    }
  
    let message = `zopa - ${count}`; // "zopa - 0"
    function log() {
      console.log(message);
    }
    
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  increment(); 
  increment(); 
  increment(); 
  log(); //"zopa - 0"
  
  // 5
  
  let counter1 = 0;
  
  function test() {
    console.log(++counter1)
  }
  
  test();//1
  
  // 6
  let counter = 0;
  
  function test() {
    console.log(counter++)
  }
  
  test();//0
  
  function test2(cb) {
    let counter = 5;
    
    cb();
  }
  
  test2(test);//1
  
  // 7
  
  //var a = undefined
  function two() {
    console.log(a) //undefined
  }
  
  function one() {
    var a = 2;
    console.log(a);//2
    two(); //1
  }
  
  var a = 1;
  console.log(a); //1
  one(); //2 1 1