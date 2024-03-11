const reverseString = function (str) {
  const len = str.length;
  let revStr = '';

  for (let i = len - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
};

// Do not edit below this line
module.exports = reverseString;
