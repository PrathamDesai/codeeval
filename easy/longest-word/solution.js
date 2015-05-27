function getLongestWord (line) {
    return line.split(" ").reduce(function (longest, word) {
        return word.length > longest.length ? word : longest;
    });
}

require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        console.log(getLongestWord(line));
    });
});
