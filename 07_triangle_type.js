function triangleType(arr) {
  console.log(arr);
  let output = [];
  const detail = arr.map((e) => {
    const joinData = e.split(" ").map(Number);
    // console.log(joinData);

    const sortedData = joinData.sort((a, b) => a - b);
    // console.log("sortedData", sortedData);

    const [x, y, z] = sortedData;

    // console.log([x, y, z]);

    if (x === y && x === z) {
      output.push("Equilateral");
    } else if (x === y || y === z || x === z) {
      output.push("Isosceles");
    } else if (x + y <= z) {
      output.push("None of these");
    } else {
      output.push("None of these");
    }
  });
  console.log(output);
  return output;
}

triangleType(["2 2 1", "3 3 3", "3 4 5", "1 1 3"]);
