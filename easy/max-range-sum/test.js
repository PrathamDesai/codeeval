var assert = require('assert');

function generate_output(callback) {
    command = 'node '+__dirname+'/solution.js '+__dirname+'/input_sample.txt';
    require('child_process').exec(command, callback).toString();
}

function load_expected_output(callback) {
    require('fs').readFile(__dirname+'/output_sample.txt', callback);
}

describe('max-range-sum', function () {
    it('should find the max possible gain over the period', function (done) {

        generate_output(function (err, generated) {
            load_expected_output(function (err, expected) {
                assert.equal(expected, generated);
                done();
            });
        });

    });
});