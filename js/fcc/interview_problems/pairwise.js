// Helper: Check if an index is in an array of pairs
const inPairs = (index, pairs) =>
  !!pairs.reduce((a, x) => {
    if (x[0] === index || x[1] === index) {
      return a + 1;
    }
    return a;
  }, 0);

// Helper: Return an array of all indices that match the given value in the given array
const allIndices = (arr, value) =>
  arr
    .map((el, i) => (el === value ? i : -1))
    .filter((index) => index !== -1);

// Return all unique pairs of indices from the given array that sum to the given amount
const pairwise = (arr, arg) => {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    const indices = allIndices(arr, arg - arr[i]);
    for (let j = 0; j < indices.length; j++) {
      if (!inPairs(i, pairs)) {
        if (indices[j] !== i && !inPairs(indices[j], pairs)) {
          pairs.push([i, indices[j]]);
        }
      } else {
        break;
      }
    }
  }

  return pairs.reduce((acc, pair) => acc + pair[0] + pair[1], 0);
};
