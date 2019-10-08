const chalk = require("chalk");
const yargs = require("yargs");
const {
  addNote,
  removeNote,
  listNotes,
  readNote
} = require("./notes");

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
  handler({ title, body }) {
    addNote(title, body)
  }
})

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler({ title }) {
    removeNote(title);
  }
})

// Create a list command
yargs.command({
  command: "list",
  describe: "List a note",
  handler() {
    listNotes();
  }
})

// Create a read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      description: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler({ title }) {
    readNote(title);
  }
})

// add, remove, read, list

yargs.parse()
