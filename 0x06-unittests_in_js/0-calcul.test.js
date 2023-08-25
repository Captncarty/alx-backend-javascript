let assert = require('assert');
let calcNum = require('./0-calcul.js');

describe('calcNum', () => {
  it('confiirm if rounded', () => {
    assert.equal(calcNum(1.0, 6), 7);
    assert.equal(calcNum(1.6, 0), 2);
    assert.equal(calcNum(1, 1), 2);
  });

  it('round arguments', () => {
    assert.equal(calcNum(0.6, 1), 2);
    assert.equal(calcNum(3.2, 5), 8);
    assert.equal(calcNum(1, 5.5), 7);
  });

  it('make rounded', () => {
    assert.equal(calcNum(3.5, 6), 10);
    assert.equal(calcNum(4.4, 8), 12);
    assert.equal(calcNum(1.1, 4), 5);
  });
});
