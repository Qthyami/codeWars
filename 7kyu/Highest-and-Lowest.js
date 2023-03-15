


  function highAndLow(numbers){
    let strArr = numbers.split(" ");
    console.log(strArr);
    
  
    let max = parseFloat(strArr[0]);
    let min = parseFloat(strArr[0]);
    
    for(let i = 0; i < strArr.length; i++ ){
      if(parseFloat(strArr[i]) > max) {
        max = parseFloat(strArr[i]);
      } else if((parseFloat(strArr[i]))< min) {
        min = parseFloat(strArr[i]);
      }
      
    }
    
    let anw = max.toString() + ' ' + min.toString();

    console.log(anw);
    return anw;
  }
  
  console.log(highAndLow("115 0 3 4 -54 198")); 
  