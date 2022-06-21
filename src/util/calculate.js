import { formatFloatNum } from '../helpers/formatters'

export function calculate(strNumA, strNumB, operator) {
  const a = Number(strNumA);
  const b = Number(strNumB);
  if (!a || !b || !operator) return;
  let cal;
  switch (operator) {
    case 'x':
      cal = a * b;
      break;
    case '/':
      cal = a / b;
      break;
    case '-':
      cal = a - b;
      break;
    case '+':
      cal = a + b;
      break;
    default:
      break;
  }
  return formatFloatNum(cal)
}
