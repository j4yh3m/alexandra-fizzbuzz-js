const fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', () => {
  // Test 1: Regular numbers
  test('returns "1" when given 1', () => {
    expect(fizzbuzz(1)).toBe('1');
  });

  // Alexandra will add more tests here following TDD
  // Next tests to add:
  // - Test for 2 (returns "2")
  // - Test for 3 (returns "Fizz")
  // - Test for 5 (returns "Buzz")
  // - Test for 15 (returns "FizzBuzz")
  // - Test for a range (fizzbuzzRange(1, 5) returns ["1", "2", "Fizz", "4", "Buzz"])
});