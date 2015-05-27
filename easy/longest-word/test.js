var assert          = require('assert');
var helpers         = require('../../support/helpers');
var runSolution     = helpers.runSolution;
var getOutputSample = helpers.getOutputSample;

describe('longest-word', function () {
    it('should get the longest word in a line', function (done) {
        runSolution(__dirname, function (generated) {
            getOutputSample(__dirname, function (expected) {
                assert.equal(expected, generated);
                done();
            });
        });
    });
});
