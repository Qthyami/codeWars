function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === "number") {
        sum += Math.pow(numbers[i], 2);
      }
    }
    return sum;
  }
  console.log(squareSum([[1,2],[3,4],11]));