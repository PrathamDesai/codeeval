var assert          = require('assert');
var helpers         = require('../../support/helpers');
var runSolution     = helpers.runSolution;

describe('sum-of-primes', function () {
    it('should sum the first 1000 prime numbers', function (done) {
        runSolution(__dirname, function (generated) {
            expected = '3682913';
            assert.equal(expected, generated);
            done();
        });
    });
});
