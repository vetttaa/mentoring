function cloneDeep(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(cloneDeep);
    }
    
    const clonedObj = {};
    
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = cloneDeep(obj[key]);
      }
    }
    
    return clonedObj;
  }
  
  const dataPerson = {
    name: 'Ann',
    age: 10,
    likeFoods: ['apple', 'pizza']
  };
  
  const clone = cloneDeep(dataPerson);
  
  console.log(clone);