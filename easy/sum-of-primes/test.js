var assert = require('assert');

function generate_output(callback) {
    command = 'node '+__dirname+'/solution.js';
    require('child_process').exec(command, callback).toString();
}

describe('sum-of-primes', function () {
    it('should sum the first 1000 prime numbers', function (done) {

        generate_output(function (err, generated) {
            assert.equal('3682913', generated);
            done();
        });

    });
});
