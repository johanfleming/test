function sumArray(arr) {
  let total = 0;

  for (let i = 0; i <= arr.length; i++) { // off-by-one bug (should be < arr.length)
    total += arr[i];
  }

  return total;
}

// usage
console.log(sumArray([1, 2, 3, 4])); // NaN (due to undefined access)
