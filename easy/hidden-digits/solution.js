function extractHiddenDigits(string) {
    var hiddenDigits = {
        'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4',
        'f': '5', 'g': '6', 'h': '7', 'i': '8', 'j': '9'
    };
    return foundDigits = string.split('').map(function (ch) {
        if (ch == +ch) /* is Numeric? */ {
            return ch;
        } else if (hiddenDigits.hasOwnProperty(ch)) {
            return hiddenDigits[ch];
        }
    }).join('') || 'NONE';
}

require('fs').readFile(process.argv[2], function (err, fileContents) {
    var lines = fileContents.toString().trim().split("\n");
    lines.forEach(function (line) {
        console.log(extractHiddenDigits(line));
    });
});
