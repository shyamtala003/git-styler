#!/usr/bin/env node

const { Command } = require("commander");
const { execSync } = require("child_process");

const program = new Command();

// Define commit types
const commitTypes = {
  gfeat: "📦 NEW",
  gimp: "👌 IMPROVE",
  gfix: "🐛 FIX",
  gdoc: "📖 DOC",
  gtest: "🤖 TEST",
  gbreak: "‼️ BREAKING",
  grel: "🦄 RELEASE",
};

// Function to run git commands
const runGitCommand = (prefix, message) => {
  try {
    const commitMessage = `${prefix}: ${message}`;
    execSync(`git add . && git commit -m "${commitMessage}" && git push`, {
      stdio: "inherit",
    });
    console.log(`✅ Commit & Push Successful: ${commitMessage}`);
  } catch (error) {
    console.error("❌ Error committing changes:", error.message);
    process.exit(1);
  }
};

// Set the CLI name explicitly
program.name("git-styler");

// Debug arguments received
console.log("Arguments received:", process.argv);

// Define commands
Object.entries(commitTypes).forEach(([cmd, prefix]) => {
  program
    .command(`${cmd} <message>`)
    .description(`Commit with ${prefix} type`)
    .action((message) => runGitCommand(prefix, message));
});

// Manually handle direct execution
if (require.main === module) {
  program.parse(process.argv);
}
