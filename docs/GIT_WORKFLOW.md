# Git Workflow Guide 🌳

This guide will help you understand professional Git workflows and best practices.

## 🎯 Git Basics

### Essential Commands

```bash
# Check status
git status

# Add files to staging
git add <filename>     # Add specific file
git add .              # Add all changes

# Commit changes
git commit -m "type: description"

# Push to GitHub
git push origin <branch-name>

# Pull latest changes
git pull origin main
```

## 📝 Commit Message Format

We follow conventional commits for clear history:

```
type: short description

Longer explanation if needed (optional)
```

### Types:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Formatting, missing semicolons, etc.
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `test:` Adding missing tests
- `chore:` Maintenance tasks

### Examples:

```bash
git commit -m "feat: add fizzbuzz function for number 1"
git commit -m "test: add test for multiples of 3"
git commit -m "refactor: simplify fizzbuzz logic"
git commit -m "docs: update README with setup instructions"
```

## 🌿 Branch Workflow

### 1. Create a Feature Branch

Never work directly on `main`! Create a branch:

```bash
# Create and switch to new branch
git checkout -b feature/add-validation

# Or separately:
git branch feature/add-validation
git checkout feature/add-validation
```

### Branch Naming:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code improvements

### 2. Work on Your Feature

```bash
# Make changes
# Run tests
npm test

# Add and commit
git add .
git commit -m "feat: add input validation"

# Push branch to GitHub
git push origin feature/add-validation
```

### 3. Create a Pull Request

1. Go to GitHub repository
2. Click "Compare & pull request"
3. Write a description:
   - What changes you made
   - Why you made them
   - How to test them

### 4. Code Review

Wait for review! Address any feedback:

```bash
# Make requested changes
git add .
git commit -m "fix: address review comments"
git push origin feature/add-validation
```

### 5. Merge

Once approved, merge to main!

## 🔄 Keeping Your Branch Updated

```bash
# Switch to main
git checkout main

# Get latest changes
git pull origin main

# Switch back to your branch
git checkout feature/add-validation

# Merge main into your branch
git merge main
```

## 📋 Complete Workflow Example

Let's add a new feature:

```bash
# 1. Start from updated main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/add-sound-effects

# 3. Make changes and test
# ... edit files ...
npm test

# 4. Commit changes
git add .
git commit -m "feat: add sound effects for fizzbuzz"

# 5. Push to GitHub
git push origin feature/add-sound-effects

# 6. Create PR on GitHub
# 7. Address review feedback
# 8. Merge when approved!
```

## 🚨 Common Issues and Solutions

### Forgot to create a branch?

```bash
# Create branch from current state
git checkout -b feature/my-feature

# Your changes are now on the new branch!
```

### Need to undo last commit?

```bash
# Undo commit but keep changes
git reset --soft HEAD~1

# Undo commit and changes (careful!)
git reset --hard HEAD~1
```

### Merge conflicts?

1. Don't panic!
2. Open conflicted files
3. Look for `<<<<<<<` markers
4. Choose which code to keep
5. Remove conflict markers
6. Commit the resolution

## 🎯 Best Practices

### ✅ DO:

- Commit often (after each test passes)
- Write clear commit messages
- Pull before pushing
- Test before committing
- Keep commits focused (one feature per commit)

### ❌ DON'T:

- Commit broken code
- Use generic messages like "fix" or "update"
- Force push to shared branches
- Commit sensitive information
- Work directly on main

## 📚 Your First PR Checklist

Before creating a pull request:

- [ ] All tests pass (`npm test`)
- [ ] Code is formatted (`npm run format`)
- [ ] No linting errors (`npm run lint`)
- [ ] Commit messages are clear
- [ ] Branch is up to date with main
- [ ] You've tested the changes manually
- [ ] You've updated documentation if needed

## 🎨 Making It Fun!

Try these Git challenges:

1. **Commit Streak**: Commit at least once every day
2. **Perfect History**: Keep a clean, readable commit history
3. **PR Reviews**: Review someone else's code
4. **Branch Master**: Use different branch types
5. **Emoji Commits**: Add emojis to your commits (🎨 for style, 🐛 for fixes)

## 🆘 Getting Help

Stuck? Try these:

```bash
# See what changed
git diff

# Check commit history
git log --oneline

# See branch structure
git branch -a

# Get help for any command
git help <command>
```

Remember: Everyone makes mistakes with Git. That's how we learn! The important thing is to keep practicing.

Happy Gitting! 🚀
