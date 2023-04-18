//большие числа не обрабатывает из-за длинного перебора

function binaryAverage(binary) {
    let arr = [binary];
    let result = [binary];
    arr.push(binary);
    for (let i = 0; i < arr.length; i++) {
      for (let j = arr[i].length - 1; j >= 0; j--) {
        if (typeof arr[i][j] === 'number') {
          continue;
        } else if (typeof arr[i][j] !== 'number' && arr[i][j] === 'x') {
          const arr0 = arr[i].split("");         
          arr0[j] = "0";
         
          const arr1 = arr[i].split("");
          arr1[j] = "1";         
          
          if (!result.includes(arr0.join(''))) {
            arr.push(arr0.join(''));
            result.push(arr0.join(''));         
          }
          
          if (!result.includes(arr1.join(''))) {
            arr.push(arr1.join(''));
            result.push(arr1.join(''));          
        }
      }
    }
  }
  const arrRes=  result.filter(n=>!n.includes("x")).map(n=>parseInt(n,2)).filter(n=>n!== 0); 
  const sum= arrRes.reduce((acc,cur)=>acc+cur,0);
  const avg=sum/arrRes.length;
  return avg;
  
}
console.log(binaryAverage('1x0x'));
