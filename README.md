# Alexandra's FizzBuzz JS TDD Kata 🎯

A fun and educational project to learn Test-Driven Development (TDD) and professional software development practices!

## 🌟 What You'll Learn

- **Test-Driven Development (TDD)** - Write tests first, then code
- **Git & GitHub** - Version control and collaboration
- **CI/CD** - Automated testing and deployment
- **Code Quality** - Linting, formatting, and best practices
- **Web Development** - HTML, CSS, and JavaScript
- **Professional Workflow** - Pull requests, code reviews, and more!

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- Git
- A GitHub account
- A code editor (VS Code recommended)

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/fizzbuzz-kata.git
   cd fizzbuzz-kata
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run your first test (it will fail - that's expected!):
   ```bash
   npm test
   ```

4. Open the project in your code editor and start coding!

## 📚 Learning Path

### Step 1: Your First Test ✅

1. Open `test/fizzbuzz.test.js`
2. Run `npm test` - the test will fail (Red phase)
3. Open `src/fizzbuzz.js` and implement the function
4. Run `npm test` again - make it pass (Green phase)
5. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: implement fizzbuzz for number 1"
   ```

### Step 2: Continue with TDD 🔄

Follow the tutorial in `docs/TDD_TUTORIAL.md` for step-by-step instructions!

### Step 3: Create the Web Interface 🎨

Once your fizzbuzz logic is complete, connect it to the web interface in `app.js`.

### Step 4: Deploy Your Project 🌐

Push to GitHub and watch your site go live automatically!

## 🛠️ Available Commands

```bash
npm test           # Run tests once
npm run test:watch # Run tests in watch mode
npm run test:coverage # Check test coverage
npm run lint       # Check code quality
npm run format     # Format code automatically
npm run serve      # Start local web server
```

## 📁 Project Structure

```
fizzbuzz-kata/
├── src/           # Your source code
├── test/          # Your tests
├── docs/          # Documentation and tutorials
├── exercises/     # Extra challenges
├── index.html     # Web interface
├── style.css      # Styling
└── app.js         # JavaScript for web interface
```

## 🎯 The FizzBuzz Challenge

Write a function that:
- Returns "Fizz" for numbers divisible by 3
- Returns "Buzz" for numbers divisible by 5
- Returns "FizzBuzz" for numbers divisible by both 3 and 5
- Returns the number as a string for all other cases

## 🌈 Make It Your Own!

This project includes a beautiful web interface that you can customize:
- Change colors in `style.css`
- Add animations
- Create new themes
- Add sound effects
- Make it responsive

## 🤝 Contributing

Check out `CONTRIBUTING.md` for guidelines on:
- Creating branches
- Making commits
- Opening pull requests
- Code review process

## 📖 Resources

- [TDD Tutorial](docs/TDD_TUTORIAL.md)
- [Git Workflow Guide](docs/GIT_WORKFLOW.md)
- [Design Guidelines](docs/DESIGN_GUIDE.md)

## 🎉 Have Fun!

Remember, learning is a journey. Take your time, experiment, and don't be afraid to make mistakes. That's how we learn!

Happy coding! 💜