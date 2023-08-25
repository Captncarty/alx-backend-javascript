const Utils = {
  calcNum(type, a, b) {
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
};

module.exports = Utils;
