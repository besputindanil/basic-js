const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let defaultCounter = 0;
    let newArr = [];

    if (arr.some(item => Array.isArray(item))) {
      newArr = [].concat(...arr);
      const currentCounter = this.calculateDepth(newArr);
      if (defaultCounter < currentCounter) {
        defaultCounter = currentCounter
      }
    }
    
    counter += defaultCounter;
    return counter;
  }
};