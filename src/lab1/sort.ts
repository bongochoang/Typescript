const arrNum3 = [1,9,5,7,3];

const sortLab = function (
  array: number[],
  compare?: (a: number, b: number) => number
) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[i], array[j]) < 0) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
};

sortLab(arrNum3, (a, b) => a - b);
console.log(arrNum3);



