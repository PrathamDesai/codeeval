require('fs').readFile(process.argv[2], function (err, data) {
    console.log(data.toString().toLowerCase());
});
