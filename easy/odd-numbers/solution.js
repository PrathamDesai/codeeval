(function printOdd (number) {
    console.log(number);
    number >= 99 ? null : printOdd(number+2);
})(1);
