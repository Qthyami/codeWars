function flattenArrayAndSumSquares(arr) {
  let flattenedArray = [];
  let sumOfSquares = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (typeof element === "number") {
      flattenedArray.push(element);
      sumOfSquares += Math.pow(element, 2);
    } else if (Array.isArray(element)) {
      const [nestedFlattenedArray, nestedSumOfSquares] = flattenArrayAndSumSquares(element);
      flattenedArray.push(...nestedFlattenedArray);
      sumOfSquares += nestedSumOfSquares;
    } else {
      // Non-array element that is not a number
      flattenedArray.push(element);
    }
  }

  return [flattenedArray, sumOfSquares];
}

console.log(flattenArrayAndSumSquares([7,8,4]));