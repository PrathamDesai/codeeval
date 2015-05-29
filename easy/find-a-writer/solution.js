function decryptWriterName (encryptedName, key) {
    positions = key.trim().split(" ");
    writer    = "";
    positions.map(function (pos) {
        writer += encryptedName.charAt(+pos-1);
    });
    return writer;
}

require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {

        var parsedLine    = line.split("|"),
            encryptedName = parsedLine[0],
            key           = parsedLine[1];

        console.log(decryptWriterName(encryptedName, key));
    });
});
