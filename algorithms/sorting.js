const selectionSort = (array = [2, 3, 1, 4, 1, 3213]) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let index2 = index + 1; index2 < array.length; index2++) {
      const element2 = array[index2];
      if (element2 < element) {
        array[index2] = array[index];
        array[index] = element2;
      }
    }
  }

  return array;
};

console.log(selectionSort()); // O(n*n)


