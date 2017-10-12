function QuickSort(nums) {
  if (nums.length < 2) return nums;
  var left = [];
  var right = [];
  var pivot = nums.pop();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

var a = [2, 4, 5, 63, 4, 5, 63, 2, 4, 43];

console.log(QuickSort(a));
