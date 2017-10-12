function getMedian(left, right) {
  var result = [];
  const totallength = left.length + right.length;
  console.log(totallength);
  while (left.length && right.length) {
    if (result.length <= Math.floor(totallength / 2)) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else {
      return result[Math.floor(totallength / 2)];
    }
  }
}
var left = [1, 5, 8, 9];
var right = [2, 3, 7, 10];
console.log(getMedian(left, right));
