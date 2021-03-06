import { toNumber } from "./../../helper/number.mjs";
import { ERROR_VALUE } from "./../../error.mjs";
import Decimal from 'decimal.js';
export var SYMBOL = '^';
export default function func(exp1, exp2) {
  if (!Number.isInteger(toNumber(exp2))) {
    throw Error(ERROR_VALUE);
  }

  var result = new Decimal(toNumber(exp1)).toPower(toNumber(exp2)).toNumber();

  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}
func.SYMBOL = SYMBOL;