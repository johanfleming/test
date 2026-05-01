function factorial(n) {
  if (n < 0) throw new Error("n must be >= 0");
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// usage
console.log(factorial(5)); // 120
