# 🦄 Git Styler

**Git Styler** is a CLI tool designed to simplify and standardize commit message styling by providing structured commit commands. It follows the **conventional commit format**, helping developers maintain clean, consistent, and meaningful commit histories with ease.

---

## Why Git Styler? 🤔

Writing commit messages manually often leads to inconsistencies, such as:

- Unclear or unformatted commit messages
- Inconsistent use of emojis or prefixes
- Lack of a standard format for different types of commits

**Git Styler solves these issues** by offering easy-to-use commands for well-structured commits, ensuring your commit history is clean, readable, and professional.

---

## 🌟 Features

- ✅ **Predefined commit types** with appropriate emojis (📦 🐛 ♻️ 📖)
- ✅ **Shortcut commands** for quick commits (e.g., `gfeat`, `gfix`, `grel`, etc.)
- ✅ **Automatic `git push`** after committing changes
- ✅ **Color-coded logs** for better visibility
- ✅ **No extra configuration needed** – works out of the box!

---

## 🚀 Installation

Install **Git Styler globally** to make the commands available system-wide:

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

## 🛠️ How Git Styler Works Under the Hood(Dependencies)

- [commander](https://www.npmjs.com/package/commander) (for CLI command handling)
- [child_process](https://nodejs.org/api/child_process.html) (for executing git commands)
- [path](https://nodejs.org/api/path.html) (for script detection)

## License

This project is licensed under the MIT License.

## Author

[Shyam Tala](https://github.com/shyamtala003)

---

Enjoy committing with style! 🚀
