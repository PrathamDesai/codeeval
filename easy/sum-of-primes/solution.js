function isPrime(number) {
    var i, division, numberSqrt;

    if (number === 1) return false;

    numberSqrt = Math.sqrt(number);
    for (i = 2; i <= numberSqrt; i++) {
        division = number/i;
        // Number.isInteger() is not present here :(
        if (division == parseInt(division)) return false;
    }

    return true;
}

var primeNumbers = [];
var number = 1;

while (primeNumbers.length < 1000) {
    if (isPrime(number)) primeNumbers.push(number);
    number++;
}

require('util').print(
    primeNumbers.reduce(function (total, n) { return total+n; }, 0)
);
