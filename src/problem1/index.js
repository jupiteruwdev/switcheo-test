var sum_to_n_a = function (n) {
  // your code here
  return (n * (n + 1)) / 2;
};

var sum_to_n_b = function (n) {
  // your code here
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
};

var sum_to_n_c = function (n, sum = 0) {
  // your code here
  if (n === 1) return 1;

  return sum + n + sum_to_n_c(n - 1);
};
