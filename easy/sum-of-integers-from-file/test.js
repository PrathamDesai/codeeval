var assert          = require('assert');
var helpers         = require('../../support/helpers');
var runSolution     = helpers.runSolution;
var getOutputSample = helpers.getOutputSample;

describe('sum-of-integers-from-file', function () {
    it('sums all numbers in a file', function (done) {
        runSolution(__dirname, function (generated) {
            getOutputSample(__dirname, function (expected) {
                assert.equal(expected, generated);
                done();
            });
        });
    });
});
