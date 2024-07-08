const shuffleStr = function (s, idxs) {
  if (s.length != idxs.length) {
    return false;
  }
  let splitStr = s.split("");

  let strObj = {};

  for (let i = 0; i < idxs.length; i++) {
    strObj[idxs[i]] = splitStr[i];
  }

  let sortedStrArr = Object.entries(strObj)
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[1]);
  return sortedStrArr.join("");
};

console.log(shuffleStr("mamacode", [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(shuffleStr("dosta", [4, 0, 1, 2, 3]));
