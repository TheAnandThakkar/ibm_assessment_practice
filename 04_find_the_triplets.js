function findTheTriplets(array, d) {
  const size = array.length;
  let count = 0;

  for (var i = 0; i < size - 2; i++) {
    for (var j = i + 1; j < size - 1; j++) {
      for (var k = j + 1; k < size; k++) {
        const sum = array[i] + array[j] + array[k];
        if (sum % d === 0) {
          count++;
        }
      }
    }
  }
  console.log(count);
  return count;
}

findTheTriplets([3, 3, 4, 7, 8], 5);
