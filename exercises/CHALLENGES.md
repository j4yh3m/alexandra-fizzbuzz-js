# FizzBuzz Challenges 🚀

Ready to level up? Try these progressive challenges!

## 🌟 Beginner Challenges

### Challenge 1: Input Validation
Add validation to ensure the input is:
- A positive number
- Not too large (max 1000)
- Actually a number (not text)

```javascript
test('throws error for negative numbers', () => {
  expect(() => fizzbuzz(-1)).toThrow('Number must be positive');
});
```

### Challenge 2: Custom Words
Make FizzBuzz configurable:

```javascript
// Default behavior
customFizzBuzz(15); // "FizzBuzz"

// Custom words
customFizzBuzz(15, { 3: 'Fizz', 5: 'Buzz' }); // "FizzBuzz"
customFizzBuzz(15, { 3: 'Pop', 5: 'Snap' }); // "PopSnap"
```

### Challenge 3: Reverse FizzBuzz
Given output, find the input:

```javascript
reverseFizzBuzz('Fizz'); // Could be 3, 6, 9, 12...
reverseFizzBuzz('FizzBuzz'); // Could be 15, 30, 45...
```

## 🔥 Intermediate Challenges

### Challenge 4: FizzBuzzPlus
Add more rules:
- 7 = "Fazz"
- 11 = "Bizz"
- Combinations work as expected

```javascript
fizzBuzzPlus(21); // "FizzFazz" (3 and 7)
fizzBuzzPlus(77); // "FazzBizz" (7 and 11)
```

### Challenge 5: Visual Patterns
Create a function that shows patterns:

```javascript
fizzBuzzPattern(20);
// Returns:
// {
//   fizz: [3, 6, 9, 12, 18],
//   buzz: [5, 10, 15, 20],
//   fizzBuzz: [15],
//   regular: [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19]
// }
```

### Challenge 6: Performance Testing
Handle large ranges efficiently:

```javascript
// This should complete in under 100ms
const result = fizzbuzzRange(1, 1000000);
```

## 💪 Advanced Challenges

### Challenge 7: FizzBuzz Generator
Create an infinite generator:

```javascript
const gen = fizzBuzzGenerator();
gen.next().value; // "1"
gen.next().value; // "2"
gen.next().value; // "Fizz"
// ... continues forever
```

### Challenge 8: Async FizzBuzz
Make it work with promises:

```javascript
await asyncFizzBuzz(15); // "FizzBuzz"

// Batch processing
await asyncFizzBuzzBatch([1, 3, 5, 15]);
// ["1", "Fizz", "Buzz", "FizzBuzz"]
```

### Challenge 9: FizzBuzz API
Create a REST API:

```javascript
// GET /api/fizzbuzz/15
// Response: { value: "FizzBuzz" }

// GET /api/fizzbuzz/range?start=1&end=5
// Response: { values: ["1", "2", "Fizz", "4", "Buzz"] }
```

## 🎨 Creative Challenges

### Challenge 10: Sound FizzBuzz
Add sound effects:
- Different sounds for Fizz, Buzz, FizzBuzz
- Volume control
- Mute option

### Challenge 11: Animated FizzBuzz
Create animations:
- Numbers fade in
- Fizz slides from left
- Buzz slides from right
- FizzBuzz explodes in

### Challenge 12: Theme Builder
Create a theme builder interface:
- Color picker for each type
- Animation style selector
- Preview mode
- Export/import themes

## 🏆 Expert Challenges

### Challenge 13: ML FizzBuzz
Train a neural network to play FizzBuzz:
```javascript
const model = trainFizzBuzzModel();
model.predict(15); // "FizzBuzz"
```

### Challenge 14: Multiplayer FizzBuzz
Create a real-time game:
- Players take turns
- Timer for each turn
- Score tracking
- Leaderboard

### Challenge 15: FizzBuzz Compiler
Create a mini programming language:
```
FIZZBUZZ FROM 1 TO 20
WITH RULE 3 AS "Fizz"
WITH RULE 5 AS "Buzz"
DISPLAY WITH STYLE "rainbow"
```

## 📝 Testing Challenges

### Challenge 16: Property Testing
Use property-based testing:
```javascript
// For all numbers n:
// - fizzbuzz(n) always returns a string
// - if n % 15 === 0, result includes "Fizz" and "Buzz"
```

### Challenge 17: Mutation Testing
Ensure your tests catch bugs:
- Change `%` to `+`
- Change `===` to `==`
- Tests should fail!

### Challenge 18: Performance Benchmarks
Create benchmarks:
```javascript
benchmark('fizzbuzz', () => {
  fizzbuzz(15);
});
// Average: 0.0001ms
```

## 🎯 How to Approach Challenges

1. **Read carefully** - Understand requirements
2. **Write tests first** - TDD approach
3. **Start simple** - Get basic version working
4. **Iterate** - Improve step by step
5. **Have fun!** - These are for learning

## 📊 Progress Tracking

Create a file `my-progress.md`:
```markdown
# My FizzBuzz Progress

## Completed Challenges
- [x] Challenge 1: Input Validation
- [x] Challenge 2: Custom Words
- [ ] Challenge 3: Reverse FizzBuzz

## Notes
- Learned about error handling
- Discovered array methods
```

## 🤝 Sharing Solutions

1. Create a branch: `challenge/challenge-name`
2. Add your solution in `exercises/solutions/`
3. Include tests!
4. Create a PR with learnings

## 💡 Need Hints?

Each challenge has hints in `exercises/hints/`. But try first without looking!

Remember: The goal is learning, not just completing. Take your time, experiment, and enjoy the journey! 🚀