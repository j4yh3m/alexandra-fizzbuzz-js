# Test-Driven Development (TDD) Tutorial 🧪

Welcome to your TDD journey! This tutorial will guide you through building FizzBuzz step by step.

## 🎯 What is TDD?

Test-Driven Development follows three simple steps:
1. **Red** 🔴 - Write a failing test
2. **Green** 🟢 - Write minimal code to pass
3. **Refactor** 🔵 - Improve the code

Then repeat!

## 🚀 Let's Build FizzBuzz!

### Step 1: Your First Test (Regular Numbers)

#### 1.1 Write the Test (Red 🔴)

The first test is already written for you in `test/fizzbuzz.test.js`:

```javascript
test('returns "1" when given 1', () => {
  expect(fizzbuzz(1)).toBe('1');
});
```

Run it:
```bash
npm test
```

You'll see an error - that's perfect! The test is failing because `fizzbuzz` doesn't exist yet.

#### 1.2 Make it Pass (Green 🟢)

Open `src/fizzbuzz.js` and write the minimal code:

```javascript
function fizzbuzz(number) {
  return '1';
}

module.exports = fizzbuzz;
```

Run the test again:
```bash
npm test
```

It passes! Time to commit:
```bash
git add .
git commit -m "feat: fizzbuzz returns '1' for input 1"
```

#### 1.3 Refactor? (Blue 🔵)

Our code is too simple to refactor yet. Let's continue!

### Step 2: Handle Another Number

#### 2.1 Add a New Test (Red 🔴)

Add this test to `test/fizzbuzz.test.js`:

```javascript
test('returns "2" when given 2', () => {
  expect(fizzbuzz(2)).toBe('2');
});
```

Run tests - the new one fails!

#### 2.2 Update the Code (Green 🟢)

Update `src/fizzbuzz.js`:

```javascript
function fizzbuzz(number) {
  return number.toString();
}
```

All tests pass! Commit:
```bash
git add .
git commit -m "feat: fizzbuzz returns string for regular numbers"
```

### Step 3: Handle Fizz (Divisible by 3)

#### 3.1 Write the Test (Red 🔴)

```javascript
test('returns "Fizz" when given 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});
```

#### 3.2 Make it Pass (Green 🟢)

```javascript
function fizzbuzz(number) {
  if (number === 3) {
    return 'Fizz';
  }
  return number.toString();
}
```

Commit:
```bash
git add .
git commit -m "feat: fizzbuzz returns 'Fizz' for 3"
```

#### 3.3 Add More Fizz Tests

```javascript
test('returns "Fizz" when given 6', () => {
  expect(fizzbuzz(6)).toBe('Fizz');
});
```

#### 3.4 Refactor to Handle All Multiples of 3

```javascript
function fizzbuzz(number) {
  if (number % 3 === 0) {
    return 'Fizz';
  }
  return number.toString();
}
```

Commit:
```bash
git add .
git commit -m "refactor: fizzbuzz handles all multiples of 3"
```

### Step 4: Handle Buzz (Divisible by 5)

#### 4.1 Write the Test

```javascript
test('returns "Buzz" when given 5', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
});
```

#### 4.2 Make it Pass

```javascript
function fizzbuzz(number) {
  if (number % 3 === 0) {
    return 'Fizz';
  }
  if (number % 5 === 0) {
    return 'Buzz';
  }
  return number.toString();
}
```

Commit:
```bash
git add .
git commit -m "feat: fizzbuzz returns 'Buzz' for multiples of 5"
```

### Step 5: Handle FizzBuzz (Divisible by Both)

#### 5.1 Write the Test

```javascript
test('returns "FizzBuzz" when given 15', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
});
```

Run it - it fails! (Returns "Fizz" instead of "FizzBuzz")

#### 5.2 Fix the Logic

```javascript
function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }
  if (number % 3 === 0) {
    return 'Fizz';
  }
  if (number % 5 === 0) {
    return 'Buzz';
  }
  return number.toString();
}
```

Commit:
```bash
git add .
git commit -m "feat: fizzbuzz returns 'FizzBuzz' for multiples of both 3 and 5"
```

### Step 6: Create a Range Function

#### 6.1 Write the Test

```javascript
describe('FizzBuzz Range', () => {
  test('returns array for range 1 to 5', () => {
    expect(fizzbuzzRange(1, 5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });
});
```

#### 6.2 Implement the Function

Add to `src/fizzbuzz.js`:

```javascript
function fizzbuzzRange(start, end) {
  const results = [];
  for (let i = start; i <= end; i++) {
    results.push(fizzbuzz(i));
  }
  return results;
}

module.exports = { fizzbuzz, fizzbuzzRange };
```

Update the test file import:
```javascript
const { fizzbuzz, fizzbuzzRange } = require('../src/fizzbuzz');
```

Commit:
```bash
git add .
git commit -m "feat: add fizzbuzzRange function"
```

### Step 7: Connect to the Web Interface

Now update `app.js` to use your function!

## 🎉 Congratulations!

You've just completed your first TDD kata! 

### What You've Learned:
- ✅ Writing tests first
- ✅ Making tests pass with minimal code
- ✅ Refactoring when needed
- ✅ Committing at each step
- ✅ Building features incrementally

### Next Steps:
1. Create a feature branch for new features
2. Open a pull request
3. Get a code review
4. Merge to main
5. See your changes deploy automatically!

## 📚 Additional Challenges

Try these extensions:
1. Add parameter validation (what if someone passes -5?)
2. Make it configurable (FizzBuzz with different numbers)
3. Add more rules (e.g., "Fazz" for 7)
4. Create a reverse FizzBuzz solver
5. Add performance tests for large ranges

## 🤔 TDD Tips

1. **Keep tests simple** - One assertion per test when possible
2. **Test behavior, not implementation** - Don't test private details
3. **Use descriptive test names** - They document your code
4. **Commit often** - After each green test
5. **Refactor fearlessly** - Tests are your safety net

Happy Testing! 🧪✨