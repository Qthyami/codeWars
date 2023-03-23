function minMax(arr){
    let max = arr[0];
    let min = arr[0];
   
   for (let i=0; i < arr.length; i++) {
     if (arr[i] > max ) {
        max = arr[i];
        console.log(max,min); 
     }
     else if(arr[i] < min ) {
     min = arr[i];
     console.log(min,min);
     }
   }
   return [min,max];
   
   }
   
    console.log(minMax([1,2,35,4,5, 135, -35])) 
// short version
    function minMax2(arr) {
return [Math.min(...arr), Math.max(...arr)];
    }
    console.log(minMax2([1,2,35,4,5, 135])) 