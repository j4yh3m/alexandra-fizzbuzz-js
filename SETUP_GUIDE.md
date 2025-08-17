# 🛠️ Setup Guide - Get Ready to Code!

*Get your development environment ready for FizzBuzz success (10 minutes)*

## 🎯 What We're Setting Up

You're about to transform VS Code into a professional JavaScript development environment. When we're done, you'll have:

✨ **One-click test running** - See results instantly  
🎨 **Automatic code formatting** - Your code always looks professional  
🔍 **Real-time error detection** - Catch mistakes as you type  
🚀 **Live preview** - See your web interface update automatically  

## ⚡ Quick Setup (For the Impatient!)

If you just want to get started quickly:

```bash
# Install project dependencies
npm install

# Run your first test (it will fail - that's perfect!)
npm test

# Open in VS Code
code .
```

**Got that working?** Jump to [TDD Basics →](TDD_BASICS.md)

**🚀 Pro tip:** Every time you push code, amazing automation runs in the background! Check out our [CI/CD Guide](help/cicd-guide.md) to understand the invisible team working for you.

**Want the full professional setup?** Continue reading! 👇

## 🚀 Full Professional Setup

### Step 1: Install Essential VS Code Extensions (3 minutes)

**Open VS Code Extensions panel:** Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)

**Search for and install these (one at a time):**

1. **"Jest Runner"** by firsttris
   - *What it does:* Adds ▶️ "Run" buttons next to your tests
   - *Why you'll love it:* One-click test running!

2. **"Prettier - Code formatter"** by Prettier
   - *What it does:* Makes your code look professional automatically
   - *Why you'll love it:* Never worry about formatting again!

3. **"ESLint"** by Microsoft  
   - *What it does:* Catches potential bugs and style issues
   - *Why you'll love it:* Red squiggly lines show problems before you run code

4. **"JavaScript (ES6) code snippets"** by charalampos karypidis
   - *What it does:* Smart autocomplete for JavaScript
   - *Why you'll love it:* Type `test` and press Tab for instant test templates!

**After installing:** Reload VS Code (`Ctrl+Shift+P` → "Developer: Reload Window")

### Step 2: Configure VS Code Settings (2 minutes)

**Open Settings:** `Ctrl+,` (Windows/Linux) or `Cmd+,` (Mac)

**Search for and enable these settings:**

1. **Auto Save**
   - Search: "auto save"
   - Set to: **"afterDelay"**
   - *Why:* Your code saves automatically, tests run when you make changes

2. **Format on Save**
   - Search: "format on save"  
   - **Check the box** ✅
   - *Why:* Code looks perfect every time you save

3. **Word Wrap**
   - Search: "word wrap"
   - Set to: **"on"**
   - *Why:* Long lines don't disappear off the screen

### Step 3: Install Project Dependencies (2 minutes)

**Open VS Code Terminal:** `Ctrl+` ` (backtick key)

**Run this command:**
```bash
npm install
```

**What this does:** Downloads Jest (testing), ESLint (error checking), Prettier (formatting), and other helpful tools.

**You should see:** A bunch of downloading messages, then "added X packages"

### Step 4: Test Your Setup (3 minutes)

**1. Run your first test:**
```bash
npm test
```

**You should see:** A failing test (that's perfect! It means everything is working)

**2. Check Jest Runner extension:**
- Open `test/fizzbuzz.test.js`
- Look for a ▶️ "Run" button next to the test
- Click it to run just that test

**3. Test auto-formatting:**
- Open `src/fizzbuzz.js` (it might be empty - that's fine!)
- Type: `const   x    =     5;`
- Save the file (`Ctrl+S`)
- Watch it automatically format to: `const x = 5;`

## ✅ Setup Verification Checklist

**Your setup is ready when:**
- [ ] `npm test` runs and shows a test result (pass or fail)
- [ ] You see ▶️ "Run" buttons next to tests in `test/fizzbuzz.test.js`
- [ ] Auto-formatting works when you save files
- [ ] VS Code terminal opens with `Ctrl+` `
- [ ] You can navigate between `src/fizzbuzz.js` and `test/fizzbuzz.test.js`

## 🎨 Bonus: Make It Look Awesome

**Choose a theme that makes you happy:**
1. Press `Ctrl+Shift+P`
2. Type "theme"
3. Choose "Preferences: Color Theme"  
4. Browse and pick your favorite!

**Popular choices:**
- **Dark+ (default dark)** - Clean and professional
- **One Dark Pro** - GitHub's favorite
- **Dracula** - Purple and pink vibes
- **Monokai** - Colorful and vibrant

## 🚨 Troubleshooting Common Issues

### `npm install` fails
```bash
# Clear cache and try again
npm cache clean --force
npm install
```

### Jest Runner extension not working  
- Make sure you're in the project root folder (should see `package.json`)
- Try reloading VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"

### Tests not running
- Check Node.js version: `node --version` (should be 16+)
- Make sure you're in the right directory: `ls` should show `package.json`

### Can't find terminal
- Use menu: Terminal → New Terminal
- Or try: `Ctrl+Shift+` ` (backtick with Shift)

**Still stuck?** Check [help/troubleshooting.md](help/troubleshooting.md) for more solutions!

## 🌟 What You've Accomplished

**Congratulations!** You now have a professional JavaScript development environment that includes:

- ✅ **Professional-grade testing** with Jest
- ✅ **Code quality checking** with ESLint  
- ✅ **Automatic formatting** with Prettier
- ✅ **One-click test running** with Jest Runner
- ✅ **Modern JavaScript support** with all the latest features

**This is the same setup used by professional developers at companies like Google, Netflix, and Spotify!**

## 🎯 Your Project Structure

**Quick tour of what you're working with:**

```
Your FizzBuzz Project/
├── src/
│   └── fizzbuzz.js          # 👈 Your code goes here
├── test/  
│   └── fizzbuzz.test.js     # 👈 Your tests live here
├── index.html               # 👈 Your web interface
├── app.js                   # 👈 Connects your function to the web
├── style.css                # 👈 Makes it beautiful
└── package.json             # 👈 Project configuration
```

**For now, focus on:**
- `src/fizzbuzz.js` - Where you'll write your function
- `test/fizzbuzz.test.js` - Where your tests are

## 🚀 Ready to Learn TDD?

**Perfect!** Your development environment is now ready for professional coding. 

**Next up:** Learn the TDD mindset that will guide your FizzBuzz implementation.

---

**📁 Quick Navigation:**
- ⬅️ **Previous:** [KATA_RULES.md](KATA_RULES.md)
- ➡️ **Next:** [TDD_BASICS.md](TDD_BASICS.md)
- 🆘 **Need help?** Check [help/tools-explained.md](help/tools-explained.md)

---

**[Next: Learn TDD Basics →](TDD_BASICS.md)**

---

> *"The right tools make the difference between frustration and flow."*

**Excellent work getting set up, Alexandra!** 🌟 Now you're ready to code like a professional developer! 🚀✨