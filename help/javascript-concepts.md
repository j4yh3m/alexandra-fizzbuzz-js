# 💻 JavaScript Concepts for FizzBuzz

*Quick reference for JavaScript syntax used in this kata*

## 🎯 Just-in-Time Learning

This guide covers only the JavaScript concepts you'll encounter in your FizzBuzz journey. No overwhelming theory - just what you need, when you need it!

## 🔧 Functions

**What you'll see:**
```javascript
function fizzbuzz(number) {
  return 'something';
}
```

**What it means:**
- `function` - Creates a reusable piece of code
- `fizzbuzz` - The name we gave our function
- `(number)` - Input parameter (what gets passed in)
- `return` - What the function gives back

**Think of it like:** A recipe that takes ingredients and produces a dish.

## 🤔 Conditional Statements

**What you'll see:**
```javascript
if (condition) {
  return 'Fizz';
}
```

**What it means:**
- `if` - "Only do this when..."
- `condition` - Something that's true or false
- `{}` - The code that runs when condition is true

**Real example:**
```javascript
if (number % 3 === 0) {
  return 'Fizz';
}
```
"If the number is divisible by 3, return 'Fizz'"

## 🔢 The Modulo Operator (%)

**What you'll see:**
```javascript
number % 3 === 0
```

**What it means:**
- `%` - Gives you the remainder after division
- `===` - Checks if two things are exactly equal
- So `number % 3 === 0` means "no remainder when dividing by 3"

**Examples:**
- `6 % 3 = 0` (6 ÷ 3 = 2 remainder 0)
- `7 % 3 = 1` (7 ÷ 3 = 2 remainder 1)
- `9 % 3 = 0` (9 ÷ 3 = 3 remainder 0)

## 🔗 Logical AND Operator (&&)

**What you'll see:**
```javascript
if (number % 3 === 0 && number % 5 === 0) {
  return 'FizzBuzz';
}
```

**What it means:**
- `&&` - "AND" - both conditions must be true
- Only returns 'FizzBuzz' if divisible by both 3 AND 5

**Think of it like:** "If it's raining AND I have an umbrella, I'll go outside"

## 📝 Strings vs Numbers

**What you'll see:**
```javascript
return '1';      // String (text)
return 1;        // Number
```

**Why strings matter:**
- FizzBuzz returns strings: '1', 'Fizz', 'Buzz'
- `number.toString()` converts number to string
- `'1'` is not the same as `1` in JavaScript

## 📦 Module Exports

**What you'll see:**
```javascript
module.exports = fizzbuzz;
```

**What it means:**
- Makes your function available to other files
- Like sharing your recipe so others can use it
- Required for tests to access your function

## 🧪 Test Syntax

**What you'll see:**
```javascript
test('description', () => {
  expect(fizzbuzz(1)).toBe('1');
});
```

**What it means:**
- `test()` - Creates a test case
- `'description'` - Human-readable explanation
- `expect()` - What you're testing
- `.toBe()` - What you expect to happen

## ⚡ Quick Reference Card

**For FizzBuzz, you need:**

```javascript
// Function structure
function fizzbuzz(number) {
  // Your logic here
  return result;
}

// Checking divisibility
if (number % 3 === 0) { /* divisible by 3 */ }

// Multiple conditions
if (condition1 && condition2) { /* both true */ }

// Converting to string
return number.toString();

// Making function available
module.exports = fizzbuzz;
```

## 🚨 Common Mistakes

**Using `=` instead of `===`:**
```javascript
if (number % 3 = 0)    // ❌ Assignment
if (number % 3 === 0)  // ✅ Comparison
```

**Forgetting return:**
```javascript
function fizzbuzz(number) {
  'Fizz';           // ❌ Does nothing
  return 'Fizz';    // ✅ Returns value
}
```

**Wrong condition order:**
```javascript
// ❌ Wrong - checks 3 before 3&5
if (number % 3 === 0) return 'Fizz';
if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';

// ✅ Right - checks 3&5 first
if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
if (number % 3 === 0) return 'Fizz';
```

## 🎯 That's All You Need!

These concepts are sufficient for building FizzBuzz. As you continue your JavaScript journey, you'll learn more, but this foundation will serve you well!

**Remember:** You don't need to memorize this. Come back anytime you need a refresher!

---

**[← Back to Main Journey](../START_HERE.md)**