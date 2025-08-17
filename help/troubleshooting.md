# 🆘 Troubleshooting Guide

*Quick solutions to common problems*

## 🧪 Test Issues

### "fizzbuzz is not defined"

**What it means:** Your function doesn't exist yet or isn't exported properly.

**Solutions:**
1. **Create the function in `src/fizzbuzz.js`:**
   ```javascript
   function fizzbuzz(number) {
     // Your code here
   }
   ```

2. **Export the function:**
   ```javascript
   module.exports = fizzbuzz;
   ```

3. **Check file location:** Make sure you're editing `src/fizzbuzz.js`, not somewhere else.

### "Cannot find module '../src/fizzbuzz'"

**What it means:** The test can't find your fizzbuzz.js file.

**Solutions:**
1. **Check file exists:** Make sure `src/fizzbuzz.js` exists
2. **Check you're in right directory:** Run `ls` and look for `package.json`
3. **Restart test:** `Ctrl+C` to stop, then `npm test` again

### Test fails: "Expected 'FizzBuzz', received 'Fizz'"

**What it means:** Your condition order is wrong.

**Solution:** Check for both 3 AND 5 before individual conditions:
```javascript
// ✅ Correct order
if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
if (number % 3 === 0) return 'Fizz';
if (number % 5 === 0) return 'Buzz';
```

### Tests run but show "0 passing"

**What it means:** No tests were found or all are commented out.

**Solutions:**
1. **Check test file:** Look at `test/fizzbuzz.test.js`
2. **Uncomment tests:** Remove `//` from the beginning of test lines
3. **Check test syntax:** Make sure tests start with `test(`

## 💻 Setup Issues

### "npm command not found"

**What it means:** Node.js isn't installed or not in PATH.

**Solutions:**
1. **Install Node.js:** Download from [nodejs.org](https://nodejs.org)
2. **Restart terminal:** Close and reopen your terminal
3. **Check version:** `node --version` (should show v16+)

### "npm install" fails

**What it means:** Package installation problem.

**Solutions:**
1. **Clear cache:**
   ```bash
   npm cache clean --force
   npm install
   ```

2. **Delete and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check permissions:** Make sure you can write to the directory

### VS Code extensions not working

**What it means:** Extensions aren't installed or activated properly.

**Solutions:**
1. **Reload VS Code:** `Ctrl+Shift+P` → "Developer: Reload Window"
2. **Check extensions:** Go to Extensions panel (`Ctrl+Shift+X`)
3. **Install one by one:** Search for "Jest Runner", "Prettier", "ESLint"
4. **Restart VS Code completely**

## 🌐 Web Interface Issues

### "npm run serve" fails

**What it means:** Local server can't start.

**Solutions:**
1. **Install http-server:**
   ```bash
   npm install -g http-server
   ```

2. **Alternative server:**
   ```bash
   python -m http.server 8080
   ```

3. **Check port:** Try a different port:
   ```bash
   npx http-server -p 3000
   ```

### Web page shows but FizzBuzz doesn't work

**What it means:** Function isn't connected to the web interface.

**Solutions:**
1. **Check function export:** Make sure `src/fizzbuzz.js` has `module.exports = fizzbuzz;`
2. **Check browser console:** Press F12, look for error messages
3. **Test function first:** Make sure `npm test` passes

### Page won't load at localhost:8080

**What it means:** Server isn't running or port is blocked.

**Solutions:**
1. **Check server is running:** Look for "Available on" message in terminal
2. **Try different URL:** `http://127.0.0.1:8080`
3. **Check firewall:** Make sure port 8080 isn't blocked
4. **Try different port:** Use `npx http-server -p 3000`

## 🔧 Code Issues

### Syntax errors (red squiggly lines)

**What it means:** Your JavaScript syntax is invalid.

**Common fixes:**
1. **Missing semicolons:** Add `;` at end of lines
2. **Unmatched brackets:** Check `{` and `}` pairs
3. **Missing quotes:** Check `'` and `"` pairs
4. **Typos:** Double-check function and variable names

### Logic errors (tests fail unexpectedly)

**What it means:** Your code runs but gives wrong results.

**Debugging steps:**
1. **Add console.log:** See what your function receives and returns
   ```javascript
   console.log('Input:', number);
   console.log('Output:', result);
   ```

2. **Test manually:** Try your function with known values
3. **Check conditions:** Make sure `%` and `===` are used correctly
4. **Verify order:** Combination conditions should come first

## 📱 General Debugging Process

**When something doesn't work:**

1. **Read the error message carefully** - it usually tells you exactly what's wrong
2. **Check the basics** - file saved? correct directory? function exported?
3. **Start simple** - does the simplest case work?
4. **Add logging** - use `console.log()` to see what's happening
5. **Test incrementally** - change one thing at a time

## 🚨 Emergency Reset

**If everything is broken and you want to start fresh:**

```bash
# Save your work first!
git add .
git commit -m "save work before reset"

# Reset to clean state
git reset --hard HEAD
npm install
npm test
```

## 🆘 Still Stuck?

**If nothing here helps:**

1. **Check the specific error message** - Google the exact text
2. **Look at working examples** - Compare with code in the guides
3. **Start over with a simple case** - Does `fizzbuzz(1)` work?
4. **Ask for help** - Provide the exact error message and what you were doing

## 🔍 Common Error Messages Translation

| Error Message | What It Means | Quick Fix |
|---------------|---------------|-----------|
| `fizzbuzz is not defined` | Function doesn't exist | Create function in src/fizzbuzz.js |
| `Cannot find module` | File not found | Check file path and name |
| `Expected string, received number` | Wrong return type | Return `'1'` not `1` |
| `Unexpected token` | Syntax error | Check brackets and semicolons |
| `Module not found` | Missing dependency | Run `npm install` |

## 💡 Prevention Tips

**Avoid common problems:**
- **Save files frequently** (`Ctrl+S`)
- **Check test results after each change**
- **Read error messages completely**
- **Make small changes, test often**
- **Use VS Code auto-formatting** (save with Prettier enabled)

---

**Remember:** Every developer faces these issues! The important thing is to read error messages carefully and fix one thing at a time.

**[← Back to Main Journey](../START_HERE.md)**