var assert          = require('assert');
var helpers         = require('../../support/helpers');
var runSolution     = helpers.runSolution;
var getOutputSample = helpers.getOutputSample;

describe('odd-numbers', function () {
    it('print all odd numbers from 1 to 99', function (done) {
        runSolution(__dirname, function (generated) {
            getOutputSample(__dirname, function (expected) {
                assert.equal(expected, generated);
                done();
            });
        });
    });
});
