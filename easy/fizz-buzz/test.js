var assert = require('assert');

function generate_output(callback) {
    command = 'node '+__dirname+'/solution.js '+__dirname+'/input_sample.txt';
    require('child_process').exec(command, callback);
}

function load_expected_output(callback) {
    require('fs').readFile(__dirname+'/output_sample.txt', callback);
}

describe('fizzbuzz', function () {
    it('should replace numbers with F,B or FB', function (done) {

        generate_output(function (err, generated) {
            load_expected_output(function (err, expected) {
                assert.equal(expected, generated);
                done();
            });
        });

    });
});
