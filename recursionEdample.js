let wr = (msg = '--------') => console.log(`<br>${msg}`);

function basicRecursion(max, current) {
  if (current > max) return;
  wr(current);
  basicRecursion(max, current + 1);
}

basicRecursion(5, 1);
wr();
wr();

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function factorial(n) {
  if (n <= 2) return 1;

  return n * factorial(n - 1);
}

Array.prototype.swap = function(x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

for (var i = 1; i <= 20; i++) {
  wr(`${i}. ${factorial(i)}`);
}
