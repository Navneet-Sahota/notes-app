const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	return "Your notes...";
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const isTitlePresent = notes.find(note => note.title === title);

	if (!isTitlePresent) {
		notes.push({
			title,
			body,
		});
		saveNotes(notes);
		console.log(chalk.bold.green.inverse("Note Added Successfully!"));
		console.log("Title: ", chalk.green(title));
		console.log("Description: ", chalk.blue(body));
	} else {
		console.log(chalk.bold.red.inverse("Note title taken!"));
	}
};

const removeNote = title => {
	const notes = loadNotes();
	const isTitlePresent = notes.find(note => note.title === title);

	if (isTitlePresent) {
		const updatedNotes = notes.filter(note => note.title !== title);
		saveNotes(updatedNotes);
		console.log(chalk.bold.green.inverse("Note Removed Successfully!"));
		console.log("Title: ", chalk.red(title));
	} else {
		console.log(chalk.bold.red.inverse("Note does not exist!"));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.bold.yellow.underline.inverse("Your Notes"));
	notes.forEach((note, index) => {
		console.log(chalk.cyan(index + 1 + ") "), chalk.cyan(note.title));
	});
};

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (err) {
		return [];
	}
};

module.exports = {
	getNotes,
	addNote,
	removeNote,
	listNotes,
};
