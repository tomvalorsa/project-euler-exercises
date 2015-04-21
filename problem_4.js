// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Convert the number to string
// Round the length / 2 down (as we don't need to touch the middle number)

// Run a loop for half the length above, check if the string[i] is equal to string[length - 1 - i];

function largestPalindrome(){

    var arr = [];
    // Loops through starting from the largest 3 digit numbers.
    for(var i = 999; i > 100; i--){
        for(var j = 999; j> 100; j--){
            var mul = j * i;
            if(isPalin(mul)){
                arr.push(j * i);
            }
        }
    }

    // Finds the maximum of the array.
    return Math.max.apply(Math, arr);
}

// Returns true if the number as a string is equal to the same number reversed as a string.
function isPalin(i){
    return i.toString() === i.toString().split("").reverse().join("");
}

console.log(largestPalindrome());
