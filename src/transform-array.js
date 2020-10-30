const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('THROWN');
  };

  const copyArr = [...arr];

  for (let i = 0; i < copyArr.length; i++) {
    if(copyArr[0] === '--discard-prev' ||  copyArr[0] === '--double-prev') {
      copyArr.shift();
    }
    if(copyArr[copyArr.length - 1] === '--discard-next' ||  copyArr[copyArr.length - 1] === '--double-next') {
      copyArr.pop();
    }
    if (copyArr[i] === '--discard-prev') {
      copyArr.splice(i - 1, 2);
      i--;
    } 
    if (copyArr[i] === '--double-next') {
      copyArr.splice(i, 1, copyArr[i + 1]);
    }
    if (copyArr[i] === '--double-prev') {
      copyArr.splice(i, 1, copyArr[i - 1]);
    }
    if (copyArr[i] === '--discard-next') {
      if (copyArr[i + 2] === '--double-prev' || copyArr[i + 2] === '--discard-prev') {
        copyArr.splice(i, 3);
        i-=2;
      } else {
        copyArr.splice(i, 2);
        i--;
      }
    }
  }

  return copyArr;
};


