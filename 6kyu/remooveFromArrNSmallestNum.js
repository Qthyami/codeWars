  //убирает из массива n наименьших чисел
  function removeSmallest(n, arr) { 
    if (n>0) {
      let newArr = arr.slice();
          while (n -->0) { // равнозначно for (n; n > 0; n--)
          let minIndex = newArr.indexOf(Math.min(...newArr));
          
          newArr.splice(minIndex, 1);
          
         }
       return newArr;
    }  
    else return arr; 
  }

  console.log(removeSmallest(2, [8,17,56,18,-24.3,-48,0,-48,2]));

