function sumOfMenuIds (menu) {
    return menu.items.reduce(function (sum, item) {
        if (item && item.hasOwnProperty('label')) sum += item.id;
        return sum;
    }, 0);
}

require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        var json = JSON.parse(line);
        console.log(sumOfMenuIds(json.menu));
    });
});
