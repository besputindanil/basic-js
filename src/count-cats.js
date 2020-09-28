const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const catArray = matrix
    .reduce((current, next) => current.concat(next), [])
    .filter((item) => item === "^^");

  if (!catArray.length) {
    return 0;
  } else {
    return catArray.length;
  }
};
