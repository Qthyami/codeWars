function solution(str, ending) {
    if (ending === '') {
      return true;
    }
    return str.slice(-ending.length) === ending;
  }
  solution('sdrfsdf', 'sdf');