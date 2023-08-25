function calcNum(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a + b);
  }

  if (type === 'SUBTRACT') {
    return Math.round(a - b);
  }

  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
}

const para = calcNum('DIVIDE', 10, 5);
console.log(para);

module.exports = calcNum;
