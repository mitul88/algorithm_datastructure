const firstOccurance = (haystack, needle) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < haystack.length) {
    while (needle[j] == haystack[k]) {
      k++;
      j++;
      if (j == needle.length) return i;
      if (k == haystack.length) return -1;
    }

    if (needle[j] != haystack[i]) {
      i++;
      k = i;
      j = 0;
    }
  }

  return -1;
};

console.log(firstOccurance("sadbutsad", "sad"));
console.log(firstOccurance("codemama", "ostad"));
// The time complexity of the above code is o(m*n) where m is the steps of "haystack" and n is the steps of "needle"
// The space complexity of this code is constant
