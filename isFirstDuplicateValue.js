function isFirstDuplicateValue(array) {
  let results = new Map();
  let value = 1;

  for (let index = 0; index < array.length; index++) {
    if (results.get(array[index]) === undefined) {
      results.set(array[index], value);
    } else {
      results.set(array[index], value + 1);
      break;
    }
  }
  console.log(results);
  for (let [key, value] of results) {
    if (value === 1) {
      continue;
    } else if (value === 2) {
      return key;
    }
  }
  return -1;
}

module.exports = isFirstDuplicateValue;
