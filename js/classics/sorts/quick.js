const swap = (arr, li, ri) => {
  const tmp = arr[li];
  arr[li] = arr[ri];
  arr[ri] = tmp;
};

const partition = (arr, li, ri) => {
  const pivot = arr[Math.floor((li + ri) / 2)];

  while (li <= ri) {
    while (arr[li] < pivot) {
      li++;
    }

    while (arr[ri] > pivot) {
      ri--;
    }

    if (li <= ri) {
      swap(arr, li, ri);
      li++;
      ri--;
    }
  }

  return li;
};

const quickSort = (arr, li = 0, ri = arr.length - 1) => {
  if (arr.length < 2) return arr;

  const index = partition(arr, li, ri);

  if (li < index - 1) {
    quickSort(arr, li, index - 1);
  }

  if (index < ri) {
    quickSort(arr, index, ri);
  }

  return arr;
};
