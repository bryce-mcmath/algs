const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const merge = (left, right) => {
    const sorted = [];
    let li = 0,
      ri = 0;
    while (li < left.length && ri < right.length) {
      if (left[li] < right[ri]) {
        sorted.push(left[li]);
        li++;
      } else {
        sorted.push(right[ri]);
        ri++;
      }
    }

    return sorted.concat(left.slice(li)).concat(right.slice(ri));
  };

  return merge(mergeSort(left), mergeSort(right));
};
