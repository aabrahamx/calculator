function changeToNumber(str) {
  let number;
  str.includes(".") ? (number = parseFloat(str)) : (number = parseInt(str));
  return number;
}

function formatFloatNum(num) {
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
  return null;
}

export { changeToNumber, formatFloatNum };
