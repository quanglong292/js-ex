function intersectionBy(iteratee, ...arrays) {
  const obj = {};
  const returnVal = [];

  arrays = arrays.flat();

  for (let i = 0; i < arrays.length; i++) {
    const element1 = arrays[i];
    const key = iteratee(element1);
    if (!obj[key]) {
      obj[key] = {
        raw: element1,
        value: 1,
      };
    } else {
      obj[key] = { ...obj[key], value: obj[key].value + 1 };
    }
  }

  const objValues = Object.values(obj);
  console.log({objValues});
  
  for (let i = 0; i < objValues.length; i++) {
    const val = objValues[i];
    console.log({ val });

    if (val.value >= 2) returnVal.push(val.raw);
  }
  console.log({ returnVal });

  return returnVal;
}

// Get the intersection based on the floor value of each number
const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]

// Get the intersection based on the lowercase value of each string
const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ["apple", "banana", "ORANGE", "orange"],
  ["Apple", "Banana", "Orange"]
);
// => ['apple', 'banana', 'ORANGE']
console.log("end");
