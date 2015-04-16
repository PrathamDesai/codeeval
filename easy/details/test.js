var assert          = require('assert');
var helpers         = require('../../support/helpers');
var runSolution     = helpers.runSolution;
var getOutputSample = helpers.getOutputSample;

describe('details', function () {
    it('should calculate how many moves to touch Y on X', function (done) {
        runSolution(__dirname, function (generated) {
            getOutputSample(__dirname, function (expected) {
                assert.equal(expected, generated);
                done();
            });
        });
    });
});
