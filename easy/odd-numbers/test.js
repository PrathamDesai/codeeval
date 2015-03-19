var assert = require('assert');

function generate_output(callback) {
    command = 'node '+__dirname+'/solution.js';
    require('child_process').exec(command, callback).toString();
}

function load_expected_output(callback) {
    require('fs').readFile(__dirname+'/output_sample.txt', callback);
}

describe('odd-numbers', function () {
    it('print all odd numbers from 1 to 99', function (done) {

        generate_output(function (err, generated) {
            load_expected_output(function (err, expected) {
                assert.equal(expected, generated);
                done();
            });
        });

    });
});
