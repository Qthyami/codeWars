function f(n) {
    const innerFunc = (x) => x * 3;
    
    console.log(`f(${n})`);
    
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return innerFunc(1);
    } else {
      return innerFunc(f(n - 1));
    }
  }





