var sum = 0;
var a = 1, b = 2;
var c;

while (a <= 4000000) {

  c = b;
  b = a + b;
  a = c;
  if (a % 2 === 0) {
    sum = sum + a;
  }
}

console.log(sum);

// => 4613732
