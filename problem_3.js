var primeFactors = function(n) {
  var prime_factors = [];
  var divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      n = n / divisor;
      prime_factors.push(divisor);
    }
    divisor = divisor + 1;
  }
  console.log(prime_factors[prime_factors.length - 1]);
}

primeFactors(600851475143);

// => 6857
