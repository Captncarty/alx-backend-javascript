const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  const spy = sinon.spy(console, 'log');
  it('validates usage of Utils.calcNum', () => {
    const calcNum = sinon.stub(Utils, 'calcNum').returns(10);
	sendPaymentRequestToApi(100, 20);
    expect(calcNum.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcNum.alwaysReturned(10)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    calcNum.restore();
    spy.restore();
  });
});
