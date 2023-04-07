//суммирует 2 последних числа в ряду Фибоначчи для числа n без рекурсии
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    let arr = [0,1];
    for (let i = 2; i < n; i++) {
      arr.push (arr[i-1]+arr[i-2]);
      
    }
    let last = (arr[arr.length-1])+(arr[arr.length-2]);
    return last;
  }
}

console.log(fibonacci(70));
