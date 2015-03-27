var assert          = require('assert');
var helpers         = require('../../support/helpers');
var runSolution     = helpers.runSolution;
var getOutputSample = helpers.getOutputSample;

describe('lowercase', function () {
    it('convert contents of input file to lowercase', function (done) {
        runSolution(__dirname, function (generated) {
            getOutputSample(__dirname, function (expected) {
                assert.equal(expected, generated);
                done();
            });
        });
    });
});
