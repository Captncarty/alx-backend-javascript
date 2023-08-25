const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });

  it('checks output of sendPaymentRequestToApi with 100 and 20 as args', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('checks output of sendPaymentRequestToApi with 10 and 10 as args', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
