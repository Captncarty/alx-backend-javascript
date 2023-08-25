const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

/*
By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20)
is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function)
*/

describe('sendPaymentRequestToApi', () => {
  const spy = sinon.spy(console, 'log');
  it('validate usage of the Utils function', () => {
	const calcNum = sinon.stub(Utils, 'calcNum').returns(10);
    sendPaymentRequestToApi(100, 24);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 24)).to.be.true;
    spy.restore()
  });
});
