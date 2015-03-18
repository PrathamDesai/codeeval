var assert = require('assert');

function generate_output(callback) {
    command = 'node '+__dirname+'/solution.js';
    require('child_process').exec(command, callback).toString();
}

describe('prime-palindrome', function () {
    it('should find the highest prime palindrome smaller than 1000', function (done) {

        generate_output(function (err, generated) {
            assert.equal('929', generated);
            done();
        });

    });
});
