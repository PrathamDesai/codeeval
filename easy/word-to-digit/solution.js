var wordToDigitMap = {
      "zero":  "0",
      "one":   "1",
      "two":   "2",
      "three": "3",
      "four":  "4",
      "five":  "5",
      "six":   "6",
      "seven": "7",
      "eight": "8",
      "nine":  "9"
};

function wordToDigit(line) {
    var words  = line.split(";");
    var digits = "";
    for (var i = 0; i < words.length; i++) {
        digits += wordToDigitMap[words[i]];
    }
    return digits;
}

require("fs").readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        console.log(wordToDigit(line));
    });
});
