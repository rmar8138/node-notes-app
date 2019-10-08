const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return 'Your notes...';
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({ title, body })
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Error: Note title taken!"));
  }
}

const removeNote = function(title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(function(note) {
    return note.title !== title
  })

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note deleted."));
  } else {
    console.log(chalk.red.inverse("Error: Note not found..."));
  }
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

module.exports = { getNotes, addNote, removeNote };
