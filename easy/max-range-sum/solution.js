function calculateMaxRangeSum(data) {
    if (data.startingDay < 0) return data.max;

    var total = data.gains
        .slice(data.startingDay, data.startingDay + data.days)
        .reduce(function (sum, value) { return sum + value; }, 0);

    return calculateMaxRangeSum({
              gains: data.gains,
        startingDay: data.startingDay - 1,
               days: data.days,
                max: total > data.max ? total : data.max
    });
}

function parseLine(line) {
    var parsedLine = line.trim().split(';');
    return {
         days: parseInt(parsedLine[0]),
        gains: parsedLine[1].split(' ').map(function (n) { return parseInt(n); })
    };
}

function calculateMaxRangeSumPerLine(line) {
    var data = parseLine(line);
    return calculateMaxRangeSum({
              gains: data.gains,
        startingDay: data.gains.length - data.days,
               days: data.days,
                max: 0
    });
}

function getEachLine(fileContents) {
    return fileContents.toString().trim().split("\n");
}

var inputFile = process.argv[2];

require('fs').readFile(inputFile, function (err, fileContents) {
    getEachLine(fileContents)
        .map(calculateMaxRangeSumPerLine)
        .map(function (maxSum) { console.log(maxSum); });
});
