function isPrime(number) {
    var i, division, numberSqrt;

    if (number === 1) return false;

    numberSqrt = Math.sqrt(number);
    for (i = 2; i <= numberSqrt; i++) {
        division = number/i;
        if (division == parseInt(division)) return false;
    }

    return true;
}

function isPalindrome(number) {
    return number.toString() == number.toString().split('').reverse().join('');
}

var numbers = Array.apply(null, Array(1000)).map(function (_, i) { return i; });
var primeNumbers = numbers.filter(isPrime);
var palindromePrimes = primeNumbers.filter(isPalindrome);
var lastPalindrome = palindromePrimes.slice(-1)[0];

require('util').print(lastPalindrome);
