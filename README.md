# Git Styler

## Overview

Git Styler is a CLI tool that simplifies commit message styling by providing structured commit commands. It follows a conventional commit format, allowing developers to maintain clean and meaningful commit histories.

## Features

- **Predefined commit types** with appropriate emojis for better readability.
- **Shortcut commands** (e.g., `gfeat`, `gfix`, `grel`, etc.) for quick commits.
- **Direct command execution** without needing the package name (e.g., `gfeat "Added a new feature"`).
- **Automatic git push** after committing changes.
- **Color-coded logs** for better visibility.

## Installation

### 🔴 Important Note

This package should be installed **globally**, not locally.

#### ✅ Correct Installation:

```sh
npm install -g git-styler
```

#### ❌ Incorrect (Local Installation - Avoid This):

```sh
npm install git-styler
```

> **Why?**  
> Installing globally (`-g`) ensures that commands like `gfeat`, `gfix`, `grel`, etc., are available system-wide. If installed locally, these commands **won't be recognized in the terminal** outside the project.

## Usage

### Commit Types

Git Styler provides the following commit types:

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

### Example Usage

#### Standard Usage:

```sh
gfeat "Added a new user authentication module"
```

#### Direct Execution:

```sh
grel "Version 1.0.0 release"
```

This will execute:

```sh
git add . && git commit -m "🦄 RELEASE: Version 1.0.0 release" && git push
```

### Debugging

If you encounter any issues, check the arguments received by the script using:

```sh
git-styler --help
```

## Configuration

No additional configuration is required. The tool automatically detects git repositories and commits changes.

## Dependencies

- [commander](https://www.npmjs.com/package/commander) (for CLI command handling)
- [child_process](https://nodejs.org/api/child_process.html) (for executing git commands)
- [path](https://nodejs.org/api/path.html) (for script detection)

## License

This project is licensed under the MIT License.

## Author

[Shyam Tala](https://github.com/shyamtala003)

---

Enjoy committing with style! 🚀
