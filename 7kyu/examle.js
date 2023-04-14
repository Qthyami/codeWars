
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

function generateHashtag (str) {
let arr = "#"+ str.split(" ").map(n =>n.charAt(0).toUpperCase()+n.slice(1)).join('');

return arr;

}

console.log(generateHashtag ('Hello mommy'));
let ex = ['I',"X","C","I"]
let roma = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
let ro= ex[0]+ex[1];

console.log(roma.includes(ro));



function sumStrings(a,b) { 
  return (BigInt(a) + BigInt(b)).toString();
}
console.log(sumStrings("8100824045303269669937","18!"))