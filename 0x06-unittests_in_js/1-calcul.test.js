const assert = require('assert');
const calcNum = require('./1-calcul');

describe('calcNum', () => {
  it('if type is SUM returns addition', () => {
    assert.equal(calcNum('SUM', 1, 6), 7);
    assert.equal(calcNum('SUM', 4, 1.0), 5);
    assert.equal(calcNum('SUM', 1.5, 3.5), 5);
  });

  it('if type is SUBTRACT returns minus', () => {
    assert.equal(calcNum('SUBTRACT', 6, 3), 3);
    assert.equal(calcNum('SUBTRACT', 10, 4), 6);
  });

  it('if type is DIVIDE returns division', () => {
    assert.equal(calcNum('DIVIDE', 10, 5), 2);
    assert.equal(calcNum('DIVIDE', 12, 0), 4);
  });
});
