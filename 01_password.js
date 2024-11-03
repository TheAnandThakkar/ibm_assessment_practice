function minFlips(password) {
  let count = 0;
  const len = password.length;

  for (var i = 0; i < len; i = i + 2) {
    const pair = password.slice(i, i + 2);
    console.log(pair);
    if (pair === "10" || pair === "01") {
      count++;
    }
  }

  console.log(count);
  return count;
}

minFlips("100110");
