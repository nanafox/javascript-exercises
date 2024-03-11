/**
 *
 * @param {Array} array The array of elements
 * @param  {...any} elementsToRemove The elements to remove from the array.
 * @returns A new array with the elements removed if they existed in the
 *          original array.
 */
const removeFromArray = function (array, ...elementsToRemove) {
  const newArray = Array.from(array);

  for (const element of elementsToRemove) {
    // let's remove every occurrence of the element in the array
    while (newArray.includes(element)) {
      const index = newArray.indexOf(element);
      newArray.splice(index, 1);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
