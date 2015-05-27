require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        console.log(line.split("").reduce(function (pv, cv) {
            return Number(pv) + Number(cv);
        }));
    });
});
