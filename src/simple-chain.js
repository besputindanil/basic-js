const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value = '') {
    this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.chainArray[position - 1] || isNaN(position) || !Number.isInteger(position)) {
      this.chainArray = [];
      throw new Error('THROWN');
    } else {
      this.chainArray.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let resultChain = this.chainArray.join('~~');
    this.chainArray = [];
    return resultChain;
  }
};

module.exports = chainMaker;
