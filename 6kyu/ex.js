function binaryAverage(binary) {
  let count = 0;
  let sum = 0;
  
  function generateCombinations(binary, idx, decimal) {
    if (idx >= binary.length) {
      count++;
      sum += decimal;
      return;
    }
    
    if (binary[idx] === 'x') {
      generateCombinations(binary, idx+1, decimal * 2);
      generateCombinations(binary, idx+1, decimal * 2 + 1);
    } else {
      generateCombinations(binary, idx+1, decimal * 2 + parseInt(binary[idx]));
    }
  }
  
  generateCombinations(binary, 0, 0);
  
  const average = sum / count;
  
  return parseFloat(average.toFixed(2));
}

console.log(binaryAverage("1xxx1xxx0xxx0xxx1xxx1xxx0xxx0xxx1xxx0"));