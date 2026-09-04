#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const pagePath = path.join(__dirname, "..", "index.html");
const args = process.argv.slice(2);
const command = args.shift();

function usage() {
  console.log(`Usage:
  node tools/update-content.js event --day 16 --month Oct --title "Event title" --description "Details"
  node tools/update-content.js announcement --day 16 --month Oct --title "News" --description "Details" [--url "https://..."]
  node tools/update-content.js import stemclub-content.json`);
}

function option(name, fallback = "") {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? fallback : args[index + 1] || fallback;
}

function readContent() {
  const page = fs.readFileSync(pagePath, "utf8");
  const match = page.match(/\/\* CONTENT_DATA_START \*\/\s*const defaultContent = ([\s\S]*?);\s*\/\* CONTENT_DATA_END \*\//);
  if (!match) throw new Error("Content data markers were not found in index.html.");
  return JSON.parse(match[1].replace(/([{,]\s*)([a-zA-Z]+):/g, '$1"$2":'));
}

function writeContent(content) {
  const page = fs.readFileSync(pagePath, "utf8");
  const dataBlock = `/* CONTENT_DATA_START */\n  const defaultContent = ${JSON.stringify(content, null, 2)};\n  /* CONTENT_DATA_END */`;
  const updatedPage = page.replace(/\/\* CONTENT_DATA_START \*\/\s*const defaultContent = ([\s\S]*?);\s*\/\* CONTENT_DATA_END \*\//, dataBlock);
  if (updatedPage === page) throw new Error("Content data markers were not found in index.html.");
  fs.writeFileSync(pagePath, updatedPage);
}

function requireOptions(names) {
  const missing = names.filter(name => !option(name));
  if (missing.length) throw new Error(`Missing required option(s): ${missing.map(name => `--${name}`).join(", ")}`);
}

try {
  if (!command) {
    usage();
    process.exitCode = 1;
  } else if (command === "import") {
    const importPath = args[0];
    if (!importPath) throw new Error("Provide a JSON file to import.");
    const content = JSON.parse(fs.readFileSync(path.resolve(importPath), "utf8"));
    if (!Array.isArray(content.events) || !Array.isArray(content.announcements)) throw new Error("JSON must contain events and announcements arrays.");
    writeContent(content);
    console.log(`Imported ${content.events.length} event(s) and ${content.announcements.length} announcement(s).`);
  } else if (command === "event" || command === "announcement") {
    requireOptions(["day", "month", "title", "description"]);
    const content = readContent();
    const item = { day: option("day"), month: option("month"), title: option("title"), description: option("description") };
    if (command === "announcement") item.url = option("url");
    content[command === "event" ? "events" : "announcements"].push(item);
    writeContent(content);
    console.log(`Added ${command}: ${item.title}`);
  } else {
    usage();
    process.exitCode = 1;
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}