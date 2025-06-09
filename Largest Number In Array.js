function largestNum(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0]; 

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j]; 
      }
    }

    result.push(max);
  }

  return result;
}


const input = [[7, 2, 9, 4],[45, 12, 99, 23],[0, -5, -2, -10],[200, 150, 300, 100]];


console.log(largestOfEach(input)); 




