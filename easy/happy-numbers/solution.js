function isHappyNumber(number, alreadyCalculated) {
    alreadyCalculated = typeof alreadyCalculated !== 'undefined' ? alreadyCalculated : [];

    var sum = sumOfSquareOfDigits(number);
    if (sum === 1) return true;
    if (alreadyCalculated.indexOf(sum) !== -1) return false;

    alreadyCalculated.push(sum);
    return isHappyNumber(sum, alreadyCalculated);
}

function sumOfSquareOfDigits(number) {
    var digits  = number.toString().split('');
    var squares = digits.map(function (n) { return Math.pow(n, 2); });
    return squares.reduce(function (sum, n) { return sum + n; }, 0);
}

require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        number = parseInt(line);
        console.log(isHappyNumber(number) ? 1 : 0);
    });
});
