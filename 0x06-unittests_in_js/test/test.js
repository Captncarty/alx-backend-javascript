let assert = require('assert');

function runMocha() {
  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return 1 when the value is present', function () {
        assert.equal([1, 2, 3].indexOf(2), 1);
      })
    });
  });

  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(0), -1);
      })
    });
  });

  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(1), -1);
      })
    });
  });
}

runMocha()
