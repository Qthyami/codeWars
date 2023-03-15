
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

