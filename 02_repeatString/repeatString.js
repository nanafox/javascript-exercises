const repeatString = function (str, n) {
  let string = "";

  // we don't work with negative numbers
  if (n < 0) {
    return "ERROR";
  }

  for (let i = 0; i < n; i++) {
    string += str;
  }

  return string;
};

// Do not edit below this line
module.exports = repeatString;
