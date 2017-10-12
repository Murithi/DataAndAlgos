var nums = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      // snapshot(array);
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return array;
}

console.log(insertionSort(nums));
