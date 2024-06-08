const mean = (array) =>
  array.length
    ? array.reduce((prev, cur) => prev + cur, 0) / array.length
    : NaN;
console.log("Mean ---");
console.log(mean([0]));
