var primes = function(n) {

  var nums = [null, null],
      primes = [];

  // 0 and 1 aren't prime but we want the indexes to match up.
  for (var i = 2; i < n; i++) {
    nums.push(true);
  }

  // Go up to the sqrt of the given number, as per the formula.
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (nums[i]) {
      // Start with the square of i and step with i each time to get all multiples.
      for (var j = i * i; j < n; j += i) {
        // Set multiples to false as they aren't primes.
        nums[j] = false;
      }
    }
  }

  // All of the remaining elements that are 'true' have a prime value for their index.
  for (var i = 2; i < n; i++) {
    if (nums[i]) {
      primes.push(i);
    }
  }

  console.log(primes.reduce(function(a, b) { return a + b; }));
}

primes(2000000);
