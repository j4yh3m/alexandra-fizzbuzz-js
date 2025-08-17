# ⚔️ Your FizzBuzz Kata Journey

*Step-by-step guided discovery to build your solution (20-25 minutes)*

## 🎯 Your Mission

You're about to build your FizzBuzz function using Test-Driven Development. I'll guide you with questions and hints, but **you'll discover the solutions yourself**. This is how you'll really learn!

**Remember:** Take your time, think through each step, and don't worry about making mistakes. Every error is a learning opportunity!

## 🚀 Before We Start

**Open these files in VS Code:**
- `test/fizzbuzz.test.js` (left side)
- `src/fizzbuzz.js` (right side)

**Start test watching:** In terminal, run `npm run test:watch`

**This keeps tests running automatically as you code!**

## 🔴 Step 1: Meet Your First Failing Test

**Look at `test/fizzbuzz.test.js`. You should see:**

```javascript
const fizzbuzz = require('../src/fizzbuzz');

test('returns "1" when given 1', () => {
  expect(fizzbuzz(1)).toBe('1');
});
```

**🤔 Think about it:**
- What is this test asking for?
- What should happen when you call `fizzbuzz(1)`?

**Now run the test:** `npm test`

**🧐 What error do you see?** 

<details>
<summary>💡 Hint: Click here if you're not sure what the error means</summary>

The error probably says something like "Cannot find module" or "fizzbuzz is not defined". This means the test is looking for a function called `fizzbuzz`, but it doesn't exist yet. That's exactly what you need to create!

</details>

## 🟢 Step 2: Create Your First Function

**Your task:** Create a `fizzbuzz` function in `src/fizzbuzz.js` that makes the test pass.

**🤔 Think about it:**
- What's the simplest possible way to make `fizzbuzz(1)` return `"1"`?
- Remember: Start simple! You can improve it later.

**Try writing your function, then check the hint below:**

<details>
<summary>💡 Hint: Here's the structure you need</summary>

```javascript
function fizzbuzz(number) {
  // What should you return to make the test pass?
  return // ???
}

module.exports = fizzbuzz;
```

For the test `fizzbuzz(1)` to return `"1"`, what's the simplest thing you could return?

</details>

<details>
<summary>🎯 Solution: Click only after you've tried!</summary>

```javascript
function fizzbuzz(number) {
  return '1';
}

module.exports = fizzbuzz;
```

Yes, just return the string '1'! This makes the test pass. It's not the final solution, but it's a perfect start!

</details>

**🎉 Run the test again. Does it pass?**

## 🔵 Step 3: Time for Refactoring?

**🤔 Think about it:**
- Is there anything to improve about your code right now?
- Would your current function work for `fizzbuzz(2)`?

**Let's find out!** Add this test to your test file:

```javascript
test('returns "2" when given 2', () => {
  expect(fizzbuzz(2)).toBe('2');
});
```

**What happens when you run the tests now?**

<details>
<summary>💡 Hint: What should you change?</summary>

Your function probably returns '1' for everything! You need to make it work for any number. How could you convert a number to a string?

</details>

<details>
<summary>🎯 Solution: Click after you've thought about it</summary>

```javascript
function fizzbuzz(number) {
  return number.toString();
}

module.exports = fizzbuzz;
```

The `.toString()` method converts any number to a string. Now both tests should pass!

</details>

## 🔴 Step 4: Enter the Fizz Zone

**Time for the real FizzBuzz logic!** Add this test:

```javascript
test('returns "Fizz" when given 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});
```

**🤔 Think about it:**
- What makes the number 3 special?
- How do you check if a number is divisible by 3?
- What structure would you use to handle different cases?

<details>
<summary>💡 Hint: Checking divisibility</summary>

Remember the modulo operator `%`? If `number % 3 === 0`, then the number is divisible by 3. You'll need an `if` statement to check this!

</details>

<details>
<summary>💡 Hint: Function structure</summary>

```javascript
function fizzbuzz(number) {
  if (/* check if divisible by 3 */) {
    return 'Fizz';
  }
  return number.toString();
}
```

What goes in the if condition?

</details>

<details>
<summary>🎯 Solution: Click after you've tried!</summary>

```javascript
function fizzbuzz(number) {
  if (number % 3 === 0) {
    return 'Fizz';
  }
  return number.toString();
}

module.exports = fizzbuzz;
```

Now `fizzbuzz(3)` returns 'Fizz', but `fizzbuzz(1)` and `fizzbuzz(2)` still work!

</details>

**🧪 Test it!** All three tests should pass now. Try `fizzbuzz(6)` and `fizzbuzz(9)` too - they should return 'Fizz'!

## 🔴 Step 5: Bring on the Buzz

**Add the Buzz logic!** Add this test:

```javascript
test('returns "Buzz" when given 5', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
});
```

**🤔 Think about it:**
- How is this similar to the Fizz logic?
- Where should you add the Buzz check in your function?

<details>
<summary>💡 Hint: Pattern recognition</summary>

This is very similar to the Fizz logic! You need another `if` statement to check if the number is divisible by 5.

</details>

<details>
<summary>🎯 Solution: Click after you've tried!</summary>

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

module.exports = fizzbuzz;
```

</details>

**🧪 Test it!** Try `fizzbuzz(5)`, `fizzbuzz(10)`, and `fizzbuzz(20)` - they should all return 'Buzz'!

## 🔴 Step 6: The Ultimate Challenge - FizzBuzz!

**Here's the tricky one!** Add this test:

```javascript
test('returns "FizzBuzz" when given 15', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
});
```

**🤔 Big question:**
- What's special about 15?
- What happens when you run this test with your current code?
- Why might it not work as expected?

**Run the test and see what happens!**

<details>
<summary>💡 Hint: What's the problem?</summary>

15 is divisible by both 3 AND 5. But your current code probably returns 'Fizz' because it checks the 3 condition first and returns immediately. You need to check for BOTH conditions before checking individual ones!

</details>

<details>
<summary>💡 Hint: Order matters!</summary>

```javascript
function fizzbuzz(number) {
  if (/* check for both 3 AND 5 */) {
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

How do you check if a number is divisible by both 3 AND 5?

</details>

<details>
<summary>🎯 Solution: Click after you've tried!</summary>

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

module.exports = fizzbuzz;
```

The `&&` operator means "AND". The key insight is checking the combination FIRST!

</details>

## 🧪 Step 7: Test Your Complete Solution

**Add a few more tests to make sure everything works:**

```javascript
test('returns "Fizz" when given 6', () => {
  expect(fizzbuzz(6)).toBe('Fizz');
});

test('returns "Buzz" when given 10', () => {
  expect(fizzbuzz(10)).toBe('Buzz');
});

test('returns "FizzBuzz" when given 30', () => {
  expect(fizzbuzz(30)).toBe('FizzBuzz');
});
```

**🎉 All tests passing?** Congratulations! You've built a complete FizzBuzz function!

## 🔵 Step 8: Reflection and Refactoring

**🤔 Look at your final code and think:**
- Is it easy to read and understand?
- Are there any ways you could make it cleaner?
- Do you understand why each part is necessary?

**Try this:** Explain your code to yourself out loud. If you can explain it clearly, you really understand it!

## 🎯 Test Your Understanding

**Without looking at your code, can you answer these questions?**

1. Why do you check for `number % 3 === 0 && number % 5 === 0` first?
2. What would happen if you put the individual conditions before the combination?
3. Why do you return strings like `'1'` instead of numbers like `1`?

<details>
<summary>💡 Answers</summary>

1. Because 15, 30, 45, etc. are divisible by both 3 and 5. If you check individual conditions first, they'll return 'Fizz' or 'Buzz' instead of 'FizzBuzz'.

2. Numbers like 15 would return 'Fizz' instead of 'FizzBuzz' because the first matching condition wins.

3. The FizzBuzz game traditionally uses strings, and it makes the output consistent - everything is a string.

</details>

## 🚀 Bonus Challenges

**Feeling confident?** Try these extensions:

1. **Test edge cases:** What should happen with 0? Negative numbers?
2. **Add more rules:** What if 7 should return "Pop"?
3. **Create a range function:** `fizzbuzzRange(1, 20)` that returns an array

## 🎉 You Did It!

**Look what you've accomplished:**
- ✅ Built a complete FizzBuzz function
- ✅ Used Test-Driven Development
- ✅ Handled complex conditional logic
- ✅ Learned the importance of order in conditions
- ✅ Created something that actually works!

**This is real programming!** You've used the same process that professional developers use every day.

## 💾 Save Your Work

**Don't forget to commit your progress!**

```bash
git add .
git commit -m "feat: implement complete FizzBuzz function with TDD

- Returns numbers as strings for regular numbers
- Returns 'Fizz' for multiples of 3  
- Returns 'Buzz' for multiples of 5
- Returns 'FizzBuzz' for multiples of both 3 and 5
- All tests passing"
```

## 🌟 What You've Learned

**Technical skills:**
- JavaScript functions and conditionals
- Modulo operator for divisibility
- Logical AND operator
- Module exports/imports
- Jest testing framework

**Professional skills:**
- Test-Driven Development workflow
- Red-Green-Refactor cycle
- Reading and understanding error messages
- Incremental development
- Git version control

**Problem-solving skills:**
- Breaking down complex problems
- Order of operations in logic
- Edge case consideration
- Code organization and clarity

## 🚀 Ready for the Grand Finale?

**Your FizzBuzz function is complete, but the journey isn't over!** 

**Next up:** Connect your function to a beautiful web interface and see your creation come to life!

---

**📁 Quick Navigation:**
- ⬅️ **Previous:** [TDD_BASICS.md](TDD_BASICS.md)
- ➡️ **Next:** [MAKE_IT_SHINE.md](MAKE_IT_SHINE.md)
- 🆘 **Need help?** Check [help/troubleshooting.md](help/troubleshooting.md)

---

**[Next: Make It Shine →](MAKE_IT_SHINE.md)**

---

> *"The expert in anything was once a beginner who refused to give up."*

**Incredible work, Alexandra!** 🌟 You've just completed your first kata using professional TDD practices. You should be proud - this is exactly how experienced developers build software! ⚔️🎉✨