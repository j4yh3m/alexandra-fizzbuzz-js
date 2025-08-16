# Contributing to FizzBuzz Kata 🤝

Thank you for your interest in contributing! This guide will help you understand our workflow and standards.

## 🌟 How to Contribute

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/fizzbuzz-kata.git
cd fizzbuzz-kata
npm install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

- Write tests first (TDD!)
- Make sure all tests pass
- Follow our coding standards
- Update documentation if needed

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add amazing new feature"
```

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

Go to GitHub and click "New Pull Request"

## 📝 Pull Request Guidelines

### PR Title Format
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `test:` Test additions/changes
- `refactor:` Code refactoring

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] All tests pass
- [ ] Added new tests
- [ ] Manually tested

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the project style
- [ ] I've run `npm run lint`
- [ ] I've run `npm run format`
- [ ] I've updated documentation
- [ ] All tests pass
```

## 🎯 Code Standards

### JavaScript Style

```javascript
// ✅ Good
function calculateFizzBuzz(number) {
  if (number % 15 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number.toString();
}

// ❌ Avoid
function calc(n) {
  if(n%15==0)return"FizzBuzz"
  if(n%3==0)return"Fizz"
  if(n%5==0)return"Buzz"
  return n+""
}
```

### Test Style

```javascript
// ✅ Good - Descriptive test names
describe('FizzBuzz', () => {
  test('returns "Fizz" for multiples of 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
  });
});

// ❌ Avoid - Vague test names
describe('FB', () => {
  test('test1', () => {
    expect(fb(3)).toBe('Fizz');
  });
});
```

## 🔍 Code Review Process

### What We Look For

1. **Functionality** - Does it work as expected?
2. **Tests** - Are there appropriate tests?
3. **Code Quality** - Is it readable and maintainable?
4. **Performance** - Is it efficient?
5. **Documentation** - Is it well documented?

### Review Etiquette

#### As a Reviewer:
- Be kind and constructive
- Explain your suggestions
- Acknowledge good work
- Ask questions if unclear

Example feedback:
```
✅ "Great work! Consider extracting this logic into a helper function for better reusability."

❌ "This code is bad. Rewrite it."
```

#### As a Contributor:
- Be open to feedback
- Ask questions if unclear
- Explain your decisions
- Thank reviewers

## 🎨 Adding New Features

### Feature Ideas
- New visual themes
- Sound effects
- Animation options
- Game modes
- Performance tracking
- Multiplayer mode
- API integration

### Feature Checklist
- [ ] Discussed in an issue first
- [ ] Follows existing patterns
- [ ] Includes tests
- [ ] Updates documentation
- [ ] Maintains backward compatibility

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Browser:
- OS:
- Node version:
```

## 📚 Documentation

### When to Update Docs
- Adding new features
- Changing existing behavior
- Adding new commands
- Updating setup process

### Documentation Style
- Use clear, simple language
- Include code examples
- Add screenshots for UI changes
- Keep it beginner-friendly

## 🌈 Community Guidelines

### Be Inclusive
- Welcome newcomers
- Use inclusive language
- Respect different skill levels
- Celebrate diversity

### Be Helpful
- Answer questions kindly
- Share knowledge
- Provide constructive feedback
- Acknowledge contributions

### Be Professional
- Stay on topic
- Avoid offensive content
- Respect others' time
- Follow the code of conduct

## 🎯 First-Time Contributors

New to open source? Perfect! Here's how to start:

1. Look for issues labeled `good first issue`
2. Comment on the issue to claim it
3. Ask questions if you need help
4. Take your time - quality over speed
5. Celebrate your first PR! 🎉

### Easy First Contributions
- Fix typos in documentation
- Add comments to code
- Improve error messages
- Add more tests
- Create new color themes
- Improve accessibility

## 🛠️ Development Setup

```bash
# Install dependencies
npm install

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Format code
npm run format

# Start local server
npm run serve
```

## 📊 Project Structure

```
fizzbuzz-kata/
├── src/          # Source code
├── test/         # Test files
├── docs/         # Documentation
├── exercises/    # Practice exercises
├── .github/      # GitHub specific files
└── public files  # Web interface
```

## 🤝 Getting Help

Need help? Here's where to ask:

1. **GitHub Issues** - For bugs and features
2. **Discussions** - For questions and ideas
3. **Pull Request** - For code review help

## 🎉 Recognition

All contributors will be:
- Listed in our README
- Thanked in release notes
- Celebrated in our community

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to FizzBuzz Kata! Your efforts help others learn and grow. 💜