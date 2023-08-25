const { expect } = require('chai');
const paymentToken = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('checks output of getPaymentTokenFromApi with true as success', (done) => {
    paymentToken(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
