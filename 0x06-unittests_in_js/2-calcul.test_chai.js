const { expect } = require('chai');
const calcNum = require('./1-calcul');

describe('calcNum', () => {
  it('if type is SUM returns addition', () => {
    expect(calcNum('SUM', 1, 6)).to.equal(7);
    expect(calcNum('SUM', 4, 1.0)).to.equal(5);
    expect(calcNum('SUM', 1.5, 3.5)).to.equal(5);
  });

  it('if type is SUBTRACT returns minus', () => {
    expect(calcNum('SUBTRACT', 6, 3)).to.equal(3);
    expect(calcNum('SUBTRACT', 10, 4)).to.equal(6);
  });

  it('if type is DIVIDE returns division', () => {
    expect(calcNum('DIVIDE', 10, 5)).to.equal(2);
    expect(calcNum('DIVIDE', 1, 4)).to.equal(0.25);
    expect(calcNum('DIVIDE', 7, 0)).to.equal('Error');
  });
});

describe('calcNum should process division', () => {
  it('should return 2', () => {
    expect(calcNum('DIVIDE', -4, -2)).to.equal(2);
  });
  it('it should return -4', () => {
    expect(calcNum('DIVIDE', 12, -3)).to.equal(-4);
  });
});
