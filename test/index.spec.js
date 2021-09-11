import test from 'ava';
import { truthyNumbers, falsyNumbers } from './fixtures.js';
import { toNumber, toInt, toFloat, toPositiveInt, toPositiveFloat, toNegativeInt, toNegativeFloat } from '../index.js';

test('toNumber truthy', (t) => {
  truthyNumbers.forEach((num) => {
    const result = toNumber(num.value);
    t.is(result, num.expected);
  });
  t.is(toNumber('1234 234 32.44', { separator: ' ' }), 123423432.44);
});

test('toNumber falsy', (t) => {
  falsyNumbers.forEach((num) => {
    t.false(toNumber(num));
  });
});

test('toInt', (t) => {
  t.is(toInt(10), 10);
  t.is(toInt(10.6), 10);
  t.is(toInt(10.4), 10);
  t.is(toInt('10.4'), 10);
  t.is(toInt(Infinity), Infinity);
});

test('toFloat', (t) => {
  t.is(toFloat(10), 10);
  t.is(toFloat(0), 0);
  t.is(toFloat(-10), -10);
  t.is(toFloat(10.82406, { decimalPlaces: 2 }), 10.82);
  t.is(toFloat(10.4823909, { decimalPlaces: 0 }), 10);
  t.is(toFloat(10.4823909), 10.4823909);
  t.is(toFloat('10.4', { decimalPlaces: 1 }), 10.4);
  t.is(toFloat(Infinity), Infinity);
});

test('toPositiveInt', (t) => {
  t.is(toPositiveInt(20), 20);
  t.is(toPositiveInt(0, { includeZero: true }), 0);
  t.false(toPositiveInt(0));
  t.false(toPositiveInt(-20));
});

test('toNegativeInt', (t) => {
  t.is(toNegativeInt(-20), -20);
  t.is(toNegativeInt(0, { includeZero: true }), 0);
  t.false(toNegativeInt(0));
  t.false(toNegativeInt(20));
});

test('toPositiveFloat', (t) => {
  t.is(toPositiveFloat(20.89032), 20.89032);
  t.is(toPositiveFloat(0, { includeZero: true }), 0);
  t.is(toPositiveFloat(0.1), 0.1);
  t.false(toPositiveFloat(0), 'should not allow 0');
  t.false(toPositiveFloat(-20.809));
});

test('toNegativeFloat', (t) => {
  t.is(toNegativeFloat(-20), -20);
  t.is(toNegativeFloat(0, { includeZero: true }), 0);
  t.false(toNegativeFloat(0.1, { includeZero: true }));
  t.false(toNegativeFloat(0));
  t.false(toNegativeFloat(20.298));
});
