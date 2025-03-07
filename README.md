# 🚀 Introducing Git Styler: Make Your Git Commits Cleaner and Faster!

**Tired of messy commit messages?** Keeping a clean Git history is crucial for collaboration, but writing well-structured commit messages every time can be a hassle. Enter **Git Styler** – a CLI tool that simplifies commit message styling and enforces structure effortlessly. 🚀

## Why Git Styler? 🤔

Writing commit messages manually can lead to inconsistencies like:

- Unclear or unformatted commit messages
- Inconsistent use of emojis or prefixes
- No standard format for different types of commits

**Git Styler solves this** by providing easy-to-use commands for well-structured commits, following conventional commit formats.

---

## 🌟 Features

✅ **Predefined commit types** with appropriate emojis 📦 🐛 ♻️ 📖  
✅ **Shortcut commands** for quick commits (e.g., `gfeat`, `gfix`, `grel`, etc.)  
✅ **Automatic `git push`** after committing changes  
✅ **Color-coded logs** for better visibility  
✅ **No extra configuration needed** – works out of the box!

---

## 🚀 Installation

Git Styler should be installed **globally** so that commands are available system-wide.

```sh
npm install -g git-styler
```

⚠️ **Avoid local installation** (`npm install git-styler`), as the commands won't be recognized outside the project.

---

## 📌 How It Works

Git Styler introduces easy-to-remember commands for different commit types. Here are some examples:

| Command  | Emoji | Type                       |
| -------- | ----- | -------------------------- |
| `gfeat`  | 📦    | NEW (Feature)              |
| `gimp`   | 👌    | IMPROVE (Enhancement)      |
| `gfix`   | 🐛    | FIX (Bug Fix)              |
| `gdoc`   | 📖    | DOC (Documentation)        |
| `gtest`  | 🤖    | TEST (Testing)             |
| `gbreak` | ‼️    | BREAKING (Breaking Change) |
| `grel`   | 🦄    | RELEASE (Release)          |
| `gref`   | ♻️    | REFACTOR (Refactor Code)   |

---

## ✨ Usage Examples

### 1️⃣ Standard Commit

Instead of writing:

```sh
git add . && git commit -m "Added a new authentication module" && git push
```

Simply run:

```sh
gfeat "Added a new authentication module"
```

🔹 This automatically formats the commit as:

```sh
git commit -m "📦 NEW: Added a new authentication module"
```

### 2️⃣ Releasing a New Version

```sh
grel "Version 1.0.0 release"
```

👉 This runs:

```sh
git commit -m "🦄 RELEASE: Version 1.0.0 release" && git push
```

---

## 🔍 Debugging & Help

If you run into any issues, check available commands with:

```sh
git-styler --help
```

---

## 🛠️ How Git Styler Works Under the Hood

Git Styler is built using:

- **Commander.js** – For handling CLI commands
- **child_process** – To execute Git commands
- **path module** – For script detection

The tool intercepts Git commands and ensures they follow a structured format before committing. No extra configuration is needed! 🎉

---

## 📢 Spread the Word!

If you find Git Styler useful, please **star the GitHub repo** and share it with your team! ⭐  
[GitHub Repo](https://github.com/shyamtala003/git-styler)

🚀 **Start making your commit history cleaner today!**

```sh
npm install -g git-styler
```
