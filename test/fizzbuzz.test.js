const fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', () => {
  test('returns "1" when given 1', () => {
    expect(fizzbuzz(1)).toBe('1');
  });
});