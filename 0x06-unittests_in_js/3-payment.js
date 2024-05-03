/**
 * Payment module.
 */
const Utils = require('./utils');

const sendPaymentRequestToApi = (sumAmount, sumShipping) => {
  const sumCost = Utils.calculateNumber('SUM', sumAmount, sumShipping);
  console.log(`The total is: ${sumCost}`);
};

module.exports = sendPaymentRequestToApi;
