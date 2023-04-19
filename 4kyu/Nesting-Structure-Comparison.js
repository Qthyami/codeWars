//функция сравнивает структура вводимых массивов  // should return true  [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );    // should return false [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

Array.prototype.sameStructureAs = function (other) {
    function arrayToRegExp(arr) {
      let mask = "";
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          mask = mask + "a" + arrayToRegExp(arr[i]) + "b";
        } else {
          mask = mask + "x";
        }
      }
      return mask;
    }
    if (Array.isArray(this) !== Array.isArray(other)) {
      return false;
    } else {
      return arrayToRegExp(this) === arrayToRegExp(other);
    }
  };
  
  console.log([[[],[]]].sameStructureAs([[[],[]]])); 
  