const palindromes = function (str) {
  if (str === '') return true;

  const tempStr = getCleanString(str);

  for (let i = 0, c = tempStr.length - 1;
    i < tempStr.length, c >= 0; c--, i++) {
    if (tempStr[i] !== tempStr[c])
      return false; // not palindrome when any letter mismatches
  }

  return true;
};

const getCleanString = (str) => {
  const punctuations = ['!', '?', '.', ',', "'"];
  let tempStr = str.toLowerCase().replaceAll(' ', '');

  for (let c = 0; c < tempStr.length; c++) {
    if (punctuations.includes(tempStr[c])) {
      tempStr = tempStr.replace(tempStr[c], '');
    }
  }
  return tempStr;
};

// Do not edit below this line
module.exports = palindromes;
