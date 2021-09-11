const defaultOptions = {
  separator: ',',
  decimalPlaces: null,
  includeZero: false
};
export const toNumber = (value, {
  separator
} = defaultOptions) => {
  const allowedTypes = {
    string: '[object String]',
    number: '[object Number]'
  };
  const type = Object.prototype.toString.call(value);

  if (!Object.values(allowedTypes).includes(type)) {
    return false;
  }

  if (+value === Infinity || +value === -Infinity) {
    return +value;
  }

  if (type === allowedTypes.number) {
    return value - value === 0 && !isNaN(value) && value;
  } // We're now dealing with a string


  value = value.trim();

  if (value === '') {
    return false;
  }

  value = value.replace(new RegExp(separator, 'g'), '');
  value = +value;
  return value - value === 0 && !isNaN(value) && value;
};

const testInfinite = value => {
  return Number.isFinite ? !Number.isFinite(value) : !isFinite(value);
};

export const toInt = (value, {
  separator
} = defaultOptions) => {
  const number = toNumber(value, {
    separator
  });

  if (testInfinite(number)) {
    return number;
  }

  return number && parseInt(number, 10);
};
export const toFloat = (value, {
  decimalPlaces,
  separator
} = defaultOptions) => {
  const number = toNumber(value, {
    separator
  });

  if (testInfinite(number)) {
    return number;
  }

  if (!decimalPlaces && decimalPlaces !== 0) {
    return number;
  }

  return number && parseFloat(number.toFixed(decimalPlaces));
};
export const toPositiveInt = (value, {
  includeZero,
  separator
} = defaultOptions) => {
  const number = toInt(value, {
    separator
  });
  const lowestNumber = includeZero ? 0 : 1;
  return number >= lowestNumber && number;
};
export const toPositiveFloat = (value, {
  includeZero,
  decimalPlaces,
  separator
} = defaultOptions) => {
  const number = toFloat(value, {
    decimalPlaces,
    separator
  });
  const isPositive = includeZero ? number >= 0 : number > 0;
  return isPositive && number;
};
export const toNegativeInt = (value, {
  includeZero,
  separator
} = defaultOptions) => {
  const number = toInt(value, {
    separator
  });
  const highestNumber = includeZero ? 0 : -1;
  return number <= highestNumber && number;
};
export const toNegativeFloat = (value, {
  includeZero = false,
  decimalPlaces,
  separator
} = defaultOptions) => {
  const number = toFloat(value, {
    decimalPlaces,
    separator
  });
  const isNegative = includeZero ? number <= 0 : number < 0;
  return isNegative && number;
};
//# sourceMappingURL=index.js.map