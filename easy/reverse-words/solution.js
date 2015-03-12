require('fs').readFile(process.argv[2], function (err, data) {
    data.toString().trim().split("\n").forEach(function (line) {
        console.log(line.split(' ').reverse().join(' '));
    });
});
