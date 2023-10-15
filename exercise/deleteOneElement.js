// Build an array method that
// can delete one element with callback function

// [1,2,3,4,5].del(i => i === 5)

Array.prototype.del = function (fn) {
  console.log(this, fn);
};

const array = [1, 2, 3, 4, 5];
array.del((i) => i === 5);
