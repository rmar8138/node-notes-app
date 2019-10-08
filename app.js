const chalk = require("chalk");
const yargs = require("yargs");
const { getNotes } = require("./notes");

// customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      decribe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
  }
})

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("removing a note");
  }
})

// Create a list command
yargs.command({
  command: "list",
  describe: "List a note",
  handler: function() {
    console.log("Listing a note");
  }
})

// Create a read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note");
  }
})

// add, remove, read, list

yargs.parse()
