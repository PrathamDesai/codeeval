var assert = require('assert');

function generate_output(callback) {
    command = 'node '+__dirname+'/solution.js '+__dirname+'/input_sample.txt';
    require('child_process').exec(command, function (err, data) {
        callback(data.toString().trim());
    });
}

function load_expected_output(callback) {
    require('fs').readFile(__dirname+'/output_sample.txt', function (err, data) {
        callback(data.toString().trim());
    });
}

describe('lowercase', function () {
    it('convert contents of input file to lowercase', function (done) {
        generate_output(function (generated) {
            load_expected_output(function (expected) {
                assert.equal(expected, generated);
                done();
            });
        });

    });
});
