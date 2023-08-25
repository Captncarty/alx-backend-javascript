function calculateNumber(a, b) {
  return Math.round(a + b);
}

const roundedNum = calculateNumber(12, 12.8);
console.log(roundedNum);

module.exports = calculateNumber;
