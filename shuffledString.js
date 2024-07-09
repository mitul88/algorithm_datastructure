function shuffleStr(str, indices) {
  var output = "";

  for (let index = 0; index < indices.length; index++) {
    output += str[indices[index]];
  }
  return output;
}

console.log(shuffleStr("mamacode", [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(shuffleStr("dosta", [1, 2, 3, 4, 0]));
console.log(shuffleStr("carrace", [4, 5, 6, 0, 1, 2, 3]));

// The above code has linear complexity for both time and space. We have nth steps and nth time value has been stored inside the "output" variable

// NOTE: There is a mistake in the example number 2 which was given in the question.
