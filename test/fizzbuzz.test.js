const fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', () => {
  test('returns "1" when given 1', () => {
    expect(fizzbuzz(1)).toBe('1');
  });
  test('returns "2" when given 2', () => {
    expect(fizzbuzz(2)).toBe('2');
  });
  test('returns "Fizz" when given 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  test('returns "4" when given 4', () => {
    expect(fizzbuzz(4)).toBe('4');
  });
  test('returns "Buzz" when given 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
  test('returns "Fizz" when given 6', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
  });
  test('returns "Buzz" when given 10', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
  });
  test('returns "FizzBuzz" when given 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
});