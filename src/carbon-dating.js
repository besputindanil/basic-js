const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const NATURAL_LOG = 0.693;

  if (
    typeof sampleActivity !== "string" ||
    isNaN(parseFloat(sampleActivity)) ||
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) >= 15 ||
    !sampleActivity
  )
    return false;

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) /
      (NATURAL_LOG / HALF_LIFE_PERIOD)
  );
};
