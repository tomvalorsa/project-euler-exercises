// a = m^2 - n^2 , b = 2mn , c = m^2 + n^2

// given an arbitrary pair of integers, m and n, where m > n the above formula can be used to get the triple

// 1000 = 2mn + 2(m^2)
// 500 = mn + (m^2)
// 500 = m(m + n)

var a, b, c;
a = b = c = 0;

// No point searching up to 1000 as 3 numbers can't all add up to greater than 1000, so divide 1000 by 3.
for (var i = 1; i < 333; i++) {

  for (var j = 1; j < 333; j++) {

    if (i * (i + j) === 500) {
      a = (i * i) - (j * j);
      b = 2 * i * j;
      c = (i * i) + (j * j);
    }

  }

}

console.log(a, b, c);
console.log(a * b * c);
