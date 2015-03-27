var fs = require("fs");

exports.runSolution = function (dir, callback) {
    command = "node " + dir + "/solution.js";

    checkInputSample(dir, function (exists) {
        if (exists) command += " " + dir + "/input_sample.txt";

        require("child_process").exec(command, function (err, contents) {
            callback(contents.toString().trim());
        });
    });
};

function checkInputSample(dir, callback) {
    fs.exists(dir + "/input_sample.txt", callback);
}

exports.getOutputSample = function (dir, callback) {
    fs.readFile(dir + "/output_sample.txt", function (err, contents) {
        callback(contents.toString().trim());
    });
};
