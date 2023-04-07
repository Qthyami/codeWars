//Examples
//[7] should return 7, because it occurs 1 time (which is odd).
//[0] should return 0, because it occurs 1 time (which is odd).
//[1,1,2] should return 2, because it occurs 1 time (which is odd).
//[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
    const intCount = {};
    for (let i=0; i< A.length; i++){
        const char = A[i];
        
        if (intCount[char]) {
            intCount[char] += 1;
          } else {
            intCount[char] = 1;
          }
    }
      console.log(intCount);
      const oddKeys = [];
      Object.entries(intCount).forEach(([key, value]) => {
        if (value % 2 !== 0) {
          oddKeys.push(key);
        }
      });
     
      return oddKeys;
       
    
  }
  console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1,5,5,5]));