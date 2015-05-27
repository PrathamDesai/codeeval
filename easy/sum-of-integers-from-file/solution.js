require("fs").readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    console.log(lines.reduce(function (pv, cv) {
        return parseInt(pv) + parseInt(cv);
    }));
});
