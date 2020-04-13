const selectionSort = (arr) => {
  if (arr.length < 2) return arr;

  const mindex = arr.indexOf(Math.min(...arr));

  if (mindex !== 0) {
    const tmp = arr[0];
    arr[0] = arr[mindex];
    arr[mindex] = tmp;
  }

  return [arr[0], ...selectionSort(arr.slice(1))];
};
