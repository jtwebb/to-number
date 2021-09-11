// https://github.com/jonschlinkert/is-number/blob/master/test.js
export const truthyNumbers = [
  {
    value: 255,
    expected: 255
  },
  {
    value: 5000,
    expected: 5000
  },
  {
    value: 0,
    expected: 0
  },
  {
    value: 0.1,
    expected: 0.1
  },
  {
    value: -0.1,
    expected: -0.1
  },
  {
    value: -1.1,
    expected: -1.1
  },
  {
    value: 37,
    expected: 37
  },
  {
    value: 3.14,
    expected: 3.14
  },
  {
    value: 1,
    expected: 1
  },
  {
    value: 1.1,
    expected: 1.1
  },
  {
    value: 10,
    expected: 10
  },
  {
    value: 10.1,
    expected: 10.1
  },
  {
    value: 100,
    expected: 100
  },
  {
    value: -100,
    expected: -100
  },
  {
    value: '0.1',
    expected: 0.1
  },
  {
    value: '-0.1',
    expected: -0.1
  },
  {
    value: '-1.1',
    expected: -1.1
  },
  {
    value: '0',
    expected: 0
  },
  {
    value: '012',
    expected: 12
  },
  {
    value: '0xff',
    expected: 255
  },
  {
    value: '1',
    expected: 1
  },
  {
    value: '1.1',
    expected: 1.1
  },
  {
    value: '10',
    expected: 10
  },
  {
    value: '10.10',
    expected: 10.1
  },
  {
    value: '100',
    expected: 100
  },
  {
    value: '5e3',
    expected: 5000
  },
  {
    value: '   56\r\n  ',
    expected: 56
  },
  {
    value: 0.6931471805599453,
    expected: 0.6931471805599453
  },
  {
    value: 12,
    expected: 12
  },
  {
    value: 1.5707963267948966,
    expected: 1.5707963267948966
  },
  {
    value: 0.7853981633974483,
    expected: 0.7853981633974483
  },
  {
    value: 0.4636476090008061,
    expected: 0.4636476090008061
  },
  {
    value: 0.5403023058681398,
    expected: 0.5403023058681398
  },
  {
    value: 2.718281828459045,
    expected: 2.718281828459045
  },
  {
    value: 2.302585092994046,
    expected: 2.302585092994046
  },
  {
    value: 0.4342944819032518,
    expected: 0.4342944819032518
  },
  {
    value: 1.4426950408889634,
    expected: 1.4426950408889634
  },
  {
    value: 2,
    expected: 2
  },
  {
    value: 3.141592653589793,
    expected: 3.141592653589793
  },
  {
    value: 3125,
    expected: 3125
  },
  {
    value: 0.30568450305755324,
    expected: 0.30568450305755324
  },
  {
    value: 0.8414709848078965,
    expected: 0.8414709848078965
  },
  {
    value: 0.7071067811865476,
    expected: 0.7071067811865476
  },
  {
    value: 1.4142135623730951,
    expected: 1.4142135623730951
  },
  {
    value: 1.5574077246549023,
    expected: 1.5574077246549023
  },
  {
    value: 1.7976931348623157e308,
    expected: 1.7976931348623157e308
  },
  {
    value: 5e-324,
    expected: 5e-324
  },
  {
    value: '0.0',
    expected: 0
  },
  {
    value: '0x0',
    expected: 0
  },
  {
    value: '0e+5',
    expected: 0
  },
  {
    value: '000',
    expected: 0
  },
  {
    value: '0.0e-5',
    expected: 0
  },
  {
    value: '0.0E5',
    expected: 0
  },
  {
    value: 5,
    expected: 5
  },
  {
    value: 1630849255397,
    expected: 1630849255397
  },
  {
    value: 123,
    expected: 123
  },
  {
    value: 123.5,
    expected: 123.5
  },
  {
    value: '123',
    expected: 123
  },
  {
    value: '123.5',
    expected: 123.5
  },
  {
    value: '1,123',
    expected: 1123
  },
  {
    value: '1,123.5',
    expected: 1123.5
  },
  {
    value: -123,
    expected: -123
  },
  {
    value: -123.5,
    expected: -123.5
  },
  {
    value: -1,
    expected: -1
  },
  {
    value: '-123',
    expected: -123
  },
  {
    value: '-123.5',
    expected: -123.5
  },
  {
    value: '-1,123',
    expected: -1123
  },
  {
    value: '-1,123.5',
    expected: -1123.5
  },
  {
    value: '123  ',
    expected: 123
  },
  {
    value: '  123',
    expected: 123
  },
  {
    value: '123.234  ',
    expected: 123.234
  },
  {
    value: '  123.234',
    expected: 123.234
  },
  {
    value: 'Infinity',
    expected: Infinity
  },
  {
    value: Infinity,
    expected: Infinity
  },
  {
    value: -Infinity,
    expected: -Infinity
  },
  {
    value: '-Infinity',
    expected: -Infinity
  },
  {
    value: '123e5',
    expected: 12300000
  },
  {
    value: '123e-5',
    expected: 0.00123
  },
  {
    value: 10000000000000000,
    expected: 10000000000000000
  },
  {
    value: '0xFF',
    expected: 255
  },
  {
    value: '0x1',
    expected: 1
  },
  {
    value: 1,
    expected: 1
  },
  {
    value: '1',
    expected: 1
  }
];

// https://github.com/jonschlinkert/is-number/blob/master/test.js
export const falsyNumbers = [
  '   ', // issue#3
  '\r\n\t', // issue#3
  '',
  '',
  '3a',
  'abc',
  'false',
  'null',
  'true',
  'undefined',
  +'abc',
  +/foo/,
  +[1, 2, 4],
  +Math.sin,
  +NaN,
  +undefined,
  +{ a: 1 },
  +{},
  /foo/,
  [1, 2, 3],
  [1],
  [],
  true,
  false,
  +function () {},
  function () {},
  Math.sin,
  NaN,
  new Date(),
  null,
  undefined,
  {},
  // end https://github.com/jonschlinkert/is-number/blob/master/test.js

  'fake',
  'fake123',
  'fake-123',
  '10px',
  '',
  ' ',
  '  ',
  undefined,
  null,
  false,
  true,
  '..12',
  '12..',
  '12a5',
  [],
  '2016-12-31',
  '1-1',
  '1.2.3',
  ' \u00A0   \t\n\r',
  'true',
  'false',
  '    ',
  '\t\t',
  '\n\t',
  '-32.1.12',
  NaN,
  {},
  new Date()
];
