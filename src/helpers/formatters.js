function changeToNumber(str) {
  let number;
  str.includes(".") ? (number = parseFloat(str)) : (number = parseInt(str));
  return number;
}

function calculatedFormatter(num) {
  try {
    if (typeof num === "number") {
      if (Number.isInteger(num)) {
        return num;
      } else {
        const numString = num.toString();
        const MaxIndex = numString.length - 1;
        if (numString.indexOf(".") + 1 === MaxIndex) {
          return num;
        } else {
          return parseFloat(num.toFixed(2));
        }
      }
    }
    throw new Error('Argument passed in must be a number');
  } catch (error) {
    console.log(error)
  }
}

export { changeToNumber, calculatedFormatter };
