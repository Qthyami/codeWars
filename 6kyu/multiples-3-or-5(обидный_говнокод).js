//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

//Note: If the number is a multiple of both 3 and 5, only count it once.

//ELEGANT solution:
function solution2(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }

//МОЙ ГОВНОКОД
function solution(number){
    let arr1 =[];
    let answ= 0;
    let n = number;
    let m = number;

    if (number<0) {
        return 0;
    }
    
    if (n % 3 === 0) {
        for (n; n % 3 === 0 && n > 0; n = n - 3) {
            if (n !== number) { 
                arr1.push(n);
            }
        }
    }  else { 
        n = n - n % 3;
        for (n; n % 3 === 0 && n > 0; n = n - 3) {
            if (n !== number) { 
                arr1.push(n);
            }
        }
    }
  
    if (m % 5 === 0) {
        for (m; m % 5 === 0 && m > 0; m = m - 5) {
            if (m !== number) { 
                arr1.push(m);
            }
        }
    }  else { 
        m = m - m % 5;
        for (m; m % 5 === 0 && m > 0; m = m - 5) {
            if (m !== number) {
                arr1.push(m);
            }
        }
    }
    arr1 = [...new Set(arr1)];
    for (let i=0; i<arr1.length; i++){
        answ = arr1[i]+answ;
    }
    
    return answ;
}
  console.log(solution(463));
  console.log(solution2(463));

  console.time(solution2(463));
  console.timeEnd(solution2(463));
  console.time(solution(463));
  console.timeEnd(solution(463));

