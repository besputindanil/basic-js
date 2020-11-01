const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;
  let strResult;
  strResult = str + '';

  if (repeatTimes) {
    let strArray = [];
    for (let i = 0; i < repeatTimes; i++) {
      let additionResult;
      additionResult = addition + '';

      if (additionRepeatTimes) {
        let additionArray = [];
        for (let j = 0; j < additionRepeatTimes; j++) {
          additionArray.push(addition);
        }
        additionResult = additionArray.join(`${additionSeparator}`);
      }

      strArray.push(`${str}${additionResult}`)
    }
    strResult = strArray.join(`${separator}`);

  }
  return strResult;
};
