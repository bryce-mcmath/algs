// Helper: returns a boolean indicating whether or not a str has consecutive repeats
const hasConsecs = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }

  return false;
};

// Returns number of permutations of a string that exist without consecutive repeats
const permAlone = (str, initial = true) => {
  if (str.length < 2 && !initial) return str;
  if (str.length < 2) return 1;

  const res = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars =
      str.slice(0, i) + str.slice(i + 1, str.length);

    for (const permutation of permAlone(remainingChars, false)) {
      res.push(char + permutation);
    }
  }

  return initial ? res.filter((x) => !hasConsecs(x)).length : res;
};
