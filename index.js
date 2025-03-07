#!/usr/bin/env node

const { Command } = require("commander");
const { execSync } = require("child_process");
const path = require("path");
const { style } = require("./util/logStyler");
const logger = style();

const program = new Command();
const commitTypes = {
  gfeat: "📦 NEW",
  gimp: "👌 IMPROVE",
  gfix: "🐛 FIX",
  gdoc: "📖 DOC",
  gtest: "🤖 TEST",
  gbreak: "‼️ BREAKING",
  grel: "🦄 RELEASE",
};

// Detect if the script was executed directly (e.g., `grel`)
const scriptName = path.basename(process.argv[1]);
const commandKey = Object.keys(commitTypes).find((key) => key === scriptName);

const runGitCommand = (prefix, message) => {
  try {
    const commitMessage = `${prefix}: ${message}`;
    execSync(`git add . && git commit -m "${commitMessage}" && git push`, {
      stdio: "inherit",
    });
    logger.rgb(0, 255, 0).apply(`✅ Commit Successful: ${commitMessage}`);
  } catch (error) {
    logger.rgb(255, 0, 0).apply("❌ Error committing changes:", error.message);
    process.exit(1);
  }
};

// If the script was run directly (e.g., `grel "Version 0.0.1"`), handle it
if (commandKey) {
  runGitCommand(commitTypes[commandKey], process.argv.slice(2).join(" "));
} else {
  // Register all commands under `git-styler`
  program.name("git-styler");
  Object.entries(commitTypes).forEach(([cmd, prefix]) => {
    program
      .command(cmd)
      .argument("<message...>", "Commit message")
      .description(`Commit with ${prefix} type`)
      .action((message) => runGitCommand(prefix, message.join(" ")));
  });

  console.log("Arguments received:", process.argv);
  program.parse(process.argv);
}
