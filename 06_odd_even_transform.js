function oddEvenTransform(arr, n) {
  arr.forEach((e, index) => {
    for (var i = 0; i < n; i++) {
      if (arr[index] % 2 === 0) {
        arr[index] = arr[index] - 3;
      } else {
        arr[index] = arr[index] + 3;
      }
    }
  });

  console.log(arr);
  return arr;
}

oddEvenTransform([3, 4, 9], 3);
