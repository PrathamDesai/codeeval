function fib(n, p1, p2) {
    p1 = typeof p1 !== 'undefined' ? p1 : 1;
    p2 = typeof p2 !== 'undefined' ? p2 : 1;

    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    if (n == 3) return p1+p2;
    return fib(n - 1, p2, p1 + p2);
}

require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        console.log(fib(parseInt(line)).toString());
    });
});
