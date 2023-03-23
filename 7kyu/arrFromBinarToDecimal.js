function binaryArrayToNumber (arr) {
    let strg= arr.join("");
    let decimStrg= parseInt(strg, 2);
   
    return decimStrg;

  };
  console.log(binaryArrayToNumber([0, 0, 1, 0]));

// shorter
  const binaryArrayToNumber2 = arr => parseInt(arr.join(''), 2);
  console.log (binaryArrayToNumber2([0, 1, 1, 0]))