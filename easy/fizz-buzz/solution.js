function fizzbuzz(x, y, limit) {
    output = [];
    for (var n = 1; n <= limit; n++) {
        char = '';
        if (n % x === 0) char = char+'F';
        if (n % y === 0) char = char+'B';
        if (char === '') char = n;
        output.push(char);
    }
    return output.join(' ');
}

require('fs').readFile(process.argv[2], function (err, data) {
    var parsedData = data.toString().trim().split("\n");

    for (var line = 0; line < parsedData.length; line++) {
        var parsedLine = parsedData[line].split(' ');
        var x          = parsedLine[0];
        var y          = parsedLine[1];
        var limit      = parsedLine[2];
        console.log(fizzbuzz(x, y, limit));
    }
});
