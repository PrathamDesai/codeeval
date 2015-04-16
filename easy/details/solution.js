function calculateYMoves(line) {
    if (line.indexOf("XY") !== -1) return 0;
    var matches = line.match(/(\.+)/g).map(function (x) { return x.length });
    return Math.min.apply(null, matches);
}

require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        console.log(calculateYMoves(line).toString());
    });
});
