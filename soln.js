const result = (arr) => {
  const results = {}, sums = {};

  for (let i = 0; i < arr.length; i ++) {
    const temp1 = arr[i];
    if (results[i] !== 'FAIL') {
      for (let j = 0; j < arr.length; j ++) {
        const temp2 = arr[j];
        if (temp1[0] < temp2[0] && temp1[1] < temp2[1]) {
          results[i] = 'FAIL';
          break;
        } else if (temp1[0] > temp2[0] && temp1[1] > temp2[1]) {
          results[j] = 'FAIL';
        }
      }
      if (results[i] !== 'FAIL') {
        results[i] = 'PASS'
      }
    }
    
  }
  return results
}

console.log(result([[100, 1], [1, 100], [0, 90]]));
