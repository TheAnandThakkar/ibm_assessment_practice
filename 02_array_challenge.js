function arrayChallenge(array) {
  let output = [];

  for (var i = 0; i < array.length; i++) {
    let counter = 0;
    for (var j = 0; j < i; j++) {
      const diff = Math.abs(array[i] - array[j]);
      console.log("diff", diff);
      if (array[j] > array[i]) {
        counter = counter - diff;
      } else {
        counter = counter + diff;
      }
    }
    output.push(counter);
  }
  console.log(output);
  return output;
}

arrayChallenge([2, 4, 3]);
