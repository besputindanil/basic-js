const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const teamName = members
      .filter((item) => {
        if (typeof item === "string") {
          return item;
        }
      })
      .map((item) => {
        return item.trim()[0].toUpperCase();
      })
      .sort((a, b) => {
        return a.charCodeAt() - b.charCodeAt();
      })
      .join("");
    return teamName;
  } else {
    return false;
  }
};
