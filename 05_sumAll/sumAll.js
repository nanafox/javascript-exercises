const sumAll = function (start, end) {
  if (start < 0) return 'ERROR';
  if (typeof (start) !== 'number' || typeof (end) !== 'number') {
    return 'ERROR';
  }

  // get the higher end number
  const n = (start > end) ? start : end;

  return (n * (n + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
