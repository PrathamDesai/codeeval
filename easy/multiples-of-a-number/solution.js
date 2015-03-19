function multiplesOfANumber(x, n, multiple) {
    return (multiple >= x) ? multiple : multiplesOfANumber(x, n, multiple+n);
}

require('fs').readFile(process.argv[2], function (err, data) {
    data.toString().trim().split("\n").forEach(function (line) {

        var parsedLine = line.split(',');
        var x = parseInt(parsedLine[0]);
        var n = parseInt(parsedLine[1]);
        console.log(multiplesOfANumber(x, n, n));

    });
});
