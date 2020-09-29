const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [11, 0, 1],
  };

  if (!date) {
    return "Unable to determine the time of year!";
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error();
  }

  for (let key in seasons) {
    if (seasons[key].includes(date.getMonth())) return key;
  }
};
