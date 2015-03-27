var assert          = require('assert');
var helpers         = require('../../support/helpers');
var runSolution     = helpers.runSolution;

describe('prime-palindrome', function () {
    it('should find the highest prime palindrome smaller than 1000', function (done) {
        runSolution(__dirname, function (generated) {
            expected = '929';
            assert.equal(expected, generated);
            done();
        });
    });
});
