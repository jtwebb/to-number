# to-number

Simple utility to get a number from number-like variables. If it can't convert to a number it returns `false`.

### toNumber

Converts number-like variable to a number. If it can't convert the number it returns `false`.

Signature:
```js
toNumber(numberLikeVariable, options);
```

Options:  
- `separator`: The number separator (defaults to `,`)

Example:

```js
toNumber('23,490.82', { separator: ',' }); // 23490.82
toNumber('23 490.82', { separator: ' ' }); // 23490.82
```
----

### toInt

Signature:
```js
toInt(numberLikeVariable, options);
```

Options:  
- `separator`: The number separator (defaults to `,`)

Example:

```js
toInt('23,490.82', { separator: ',' }); // 23490
```

----

### toFloat

Signature:
```js
toFloat(numberLikeVariable, options);
```

Options:  
- `separator`: The number separator (defaults to `,`)
- `decimalPlaces`: The number separator (defaults to `null`)

Example:

```js
toFloat('23,490.8223', { separator: ',' }); // 23490.8223
toFloat('23,490.8223', { decimalPlaces: 2 }); // 23490.82
toFloat('23,490.8223', { decimalPlaces: 0 }); // 23490
```

----

### toPositiveInt

Signature:
```js
toPositiveInt(numberLikeVariable, options);
```

Options:  
- `separator`: The number separator (defaults to `,`)
- `includeZero`: Since zero is neither positive nor negative, use this to include if needed (defaults to `false`)

Example:

```js
toPositiveInt('23,490.8223', { separator: ',' }); // 23490
toPositiveInt(0, { includeZero: true }); // 0
toPositiveInt(0); // false
toPositiveInt(-10); // false
```

----

### toPositiveFloat

Signature:
```js
toPositiveFloat(numberLikeVariable, options);
```

Options:  
- `separator`: The number separator (defaults to `,`)
- `includeZero`: Since zero is neither positive nor negative, use this to include if needed (defaults to `false`)
- `decimalPlaces`: The number separator (defaults to `null`)

Example:

```js
toPositiveFloat('23,490.8223'); // 23490.8223
toPositiveFloat(0, { includeZero: true }); // 0
toPositiveFloat(0); // false
toPositiveFloat(-10); // false
```

----

### toNegativeInt

Signature:
```js
toNegativeInt(numberLikeVariable, options);
```

Options:  
- `separator`: The number separator (defaults to `,`)
- `includeZero`: Since zero is neither positive nor negative, use this to include if needed (defaults to `false`)

Example:

```js
toNegativeInt('-23,490.8223', { separator: ',' }); // -23490
toNegativeInt(0, { includeZero: true }); // 0
toNegativeInt(0); // false
toNegativeInt(10); // false
```

----

### toNegativeFloat

Signature:
```js
toNegativeFloat(numberLikeVariable, options);
```

Options:  
- `separator`: The number separator (defaults to `,`)
- `includeZero`: Since zero is neither positive nor negative, use this to include if needed (defaults to `false`)
- `decimalPlaces`: The number separator (defaults to `null`)

Example:

```js
toNegativeFloat('-23,490.8223'); // -23490.8223
toNegativeFloat(0, { includeZero: true }); // 0
toNegativeFloat(0); // false
toNegativeFloat(-10); // -10
```
