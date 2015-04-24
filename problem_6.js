// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers
// and the square of the sum is 3025 − 385 = 2640.

// Find the difference between
// the sum of the squares of the first one hundred natural numbers
// and the square of the sum.

var sumOfSquares = 0,
    sum = 0,
    i = 0;

for ( ; i < 100; i++) {
  console.log(i);
  sumOfSquares += Math.pow(i + 1, 2);
  sum += i + 1;
}

console.log(Math.pow(sum, 2) - sumOfSquares);

// 25164150
