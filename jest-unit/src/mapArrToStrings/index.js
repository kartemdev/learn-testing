const mapArrToStrings = (arr) => {
  return arr
          .filter((item) => Number.isInteger(item))
          .map((number) => number.toString())
};

module.exports = mapArrToStrings;
