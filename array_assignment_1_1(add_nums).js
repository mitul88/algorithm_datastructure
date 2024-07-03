const numArr = [1, 2, 3, 4, 5, 6];
const target = 11;

function twoIndices(nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoIndices(numArr, target));

// the above algorithm has  an if statement and a variable declaration which are constant time. It has a nested loop inside of another loop hence it has big O of n^2 time complexity
