# Making VS Code Perfect for Your TDD Journey! ⚡

Hi Alexandra! Let's turn VS Code into your coding superpower. With the right setup, you'll see test results instantly, catch errors before they happen, and write code like a pro!

## 🎯 Essential Extensions (Your Coding Superpowers)

### Must-Have Extensions

**1. Jest Runner** 🧪
- **What it does:** Run tests directly in VS Code with one click
- **How to install:** Press `Ctrl+Shift+X`, search "Jest Runner", click Install
- **Why you'll love it:** See green checkmarks next to passing tests!

**2. JavaScript (ES6) Code Snippets** ⚡
- **What it does:** Auto-complete common JavaScript patterns
- **How to install:** Search "JavaScript ES6" in extensions
- **Magic trick:** Type `test` and press Tab - instant test template!

**3. Prettier** 💅
- **What it does:** Makes your code look professional automatically
- **How to install:** Search "Prettier" (by Prettier team)
- **Auto-magic:** Your code will format perfectly when you save!

**4. ESLint** 🔍
- **What it does:** Spots potential bugs and style issues
- **How to install:** Search "ESLint" 
- **Your guardian:** Red squiggly lines show problems before you run code

**5. GitLens** 📚
- **What it does:** Shows your git history beautifully
- **How to install:** Search "GitLens"
- **Time travel:** See exactly when and why you changed each line

### Bonus Extensions (Make It Even Better!)

**6. Bracket Pair Colorizer** 🌈
- **What it does:** Colors matching brackets
- **Why it's helpful:** Never lose track of your { } again!

**7. Auto Rename Tag** 🏷️
- **What it does:** Changes both opening and closing HTML tags
- **Perfect for:** When you work on your web interface later

**8. Live Server** 🌐
- **What it does:** Instant preview of your web page
- **Magic:** Right-click `index.html` → "Open with Live Server"

## 🛠️ VS Code Settings (Your Personal Preferences)

Let's configure VS Code to work perfectly with your project!

### Step 1: Open Settings
- Press `Ctrl+,` (Windows/Linux) or `Cmd+,` (Mac)
- Or: File → Preferences → Settings

### Step 2: Essential Settings

Search for these settings and change them:

**Auto Save:**
- Search: "auto save"
- Set to: "afterDelay"
- **Why:** Your tests will run automatically when you save!

**Format on Save:**
- Search: "format on save"
- Check the box ✅
- **Why:** Your code will always look professional

**Word Wrap:**
- Search: "word wrap"
- Set to: "on"
- **Why:** Long lines won't disappear off the screen

**Font Size:**
- Search: "font size"
- Try: 14 or 16 (whatever feels comfortable)
- **Why:** Easier on your eyes during long coding sessions

## 🧪 Setting Up Jest Runner (See Tests in VS Code!)

This is the most exciting part - you'll see your tests run right in the editor!

### Step 1: Install Jest Runner Extension
- Extensions panel (`Ctrl+Shift+X`)
- Search "Jest Runner"
- Install by "firsttris"

### Step 2: Configure Jest Runner

Create a new file: `.vscode/settings.json` in your project:

```json
{
  "jest.autoRun": {
    "watch": true,
    "onStartup": ["all-tests"]
  },
  "jest.showCoverageOnLoad": true,
  "jest.debugMode": true
}
```

### Step 3: See the Magic!

Now when you open `test/fizzbuzz.test.js`:
- You'll see ▶️ "Run" buttons next to each test
- Green ✅ checkmarks for passing tests
- Red ❌ X's for failing tests
- Click any "Run" button to run just that test!

## 📱 Setting Up Your Workspace

### Step 1: Open Your Project
```bash
code .
```

### Step 2: Arrange Your Windows

**Perfect TDD Layout:**
1. **Left side:** `src/fizzbuzz.js` (your code)
2. **Right side:** `test/fizzbuzz.test.js` (your tests)
3. **Bottom:** Terminal for running commands

**How to split windows:**
- Open both files
- Right-click a file tab → "Split Editor Right"
- Drag and drop tabs to rearrange

### Step 3: Set Up Your Terminal

- Press `Ctrl+` ` (backtick) to open terminal
- Or: Terminal → New Terminal

**Pro tip:** Run `npm run test:watch` - tests will run automatically when you change files!

## 🎨 Customizing Your Theme (Make It Yours!)

### Popular Themes for Coders:
- **Dark+** (built-in dark theme)
- **One Dark Pro** (GitHub's favorite)
- **Dracula** (purple and pink - very popular!)
- **Material Theme** (Google's design language)

**How to change themes:**
1. Press `Ctrl+Shift+P`
2. Type "theme"
3. Choose "Preferences: Color Theme"
4. Browse and pick your favorite!

## ⚡ Keyboard Shortcuts (Become Lightning Fast!)

### Essential Shortcuts:

| Shortcut | What it does | When to use |
|----------|-------------|-------------|
| `Ctrl+S` | Save file | After every change |
| `Ctrl+Shift+P` | Command palette | To run any VS Code command |
| `Ctrl+` ` | Toggle terminal | To run npm commands |
| `Ctrl+/` | Toggle comment | To temporarily disable code |
| `F2` | Rename symbol | To rename variables everywhere |
| `Ctrl+D` | Select next occurrence | To change multiple things at once |

### TDD-Specific Shortcuts:
- **Run test:** Click ▶️ next to test (with Jest Runner)
- **Run all tests:** `npm test` in terminal
- **Format code:** Save file (if format on save is enabled)

## 🐛 Debugging Your Code

### Built-in Debugger

**Set a breakpoint:**
1. Click in the left margin next to a line number
2. A red dot appears
3. Run your code - it will pause at that line
4. Hover over variables to see their values!

**How to debug tests:**
1. Click the debug icon next to a test (Jest Runner)
2. VS Code will pause at any breakpoints
3. Step through your code line by line

## 📋 Quick Setup Checklist

**Before you start coding:**
- [ ] Jest Runner extension installed
- [ ] Prettier extension installed  
- [ ] ESLint extension installed
- [ ] Auto save enabled
- [ ] Format on save enabled
- [ ] Project opened with `code .`
- [ ] Terminal ready (`Ctrl+` `)
- [ ] Split editor with code on left, tests on right

**Test your setup:**
1. Open `test/fizzbuzz.test.js`
2. You should see a ▶️ "Run" button next to the test
3. Click it - you should see the test run!
4. Open `src/fizzbuzz.js`
5. Start coding!

## 🚨 Troubleshooting

**Tests not running?**
- Make sure Jest Runner is installed
- Try reloading VS Code (`Ctrl+Shift+P` → "Reload Window")
- Check that you're in the right folder

**Code not formatting?**
- Check that Prettier is installed
- Make sure "format on save" is enabled
- Try manually formatting: `Ctrl+Shift+P` → "Format Document"

**Extension not working?**
- Check Extensions panel for error messages
- Try disabling and re-enabling the extension
- Restart VS Code

## 🎉 You're All Set!

Now you have a professional development environment! With this setup:
- **Tests run instantly** with one click
- **Code formats automatically** when you save
- **Errors are caught immediately** with red squiggles
- **Everything looks beautiful** with your chosen theme

Ready to start your TDD journey? Open `docs/TDD_TUTORIAL.md` and let's build some amazing code! 💜✨

---

**Pro tip:** Take a screenshot of your setup when everything is working perfectly. That way you can recreate it later on other projects!