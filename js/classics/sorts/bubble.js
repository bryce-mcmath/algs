const bubbleSort = (array) => {
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const tmp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tmp;
      swaps++;
    }
  }

  return swaps ? bubbleSort(array) : array;
};
