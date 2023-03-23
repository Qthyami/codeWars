
let numbers = [[7,55,4],78,5, [[7,2],[81,4]], 50, 58];
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === "number") {
        sum += Math.pow(numbers[i], 2);
      }
    }
    return sum;
  }
console.log (squareSum(numbers));


function getMiddle(s)
{
  let count = 0;
for (let i=0; i< s.length; i++) {
  count++;
}
  if (count %2 ===0){
  e= count/2;
  return  s[e-1]+ s[e]; }
  else {e =count/2;
    e= count/2 - 0.5;
     return s[e]   
       }
}
console.log(getMiddle('ehalgrekacherezrekus'));
