const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
	if (title === "") {
		console.log(chalk.bold.red.inverse("Note title can't be empty string!"));
		return;
	}
	const notes = loadNotes();
	const isTitlePresent = notes.find(note => note.title === title);

	if (!isTitlePresent) {
		notes.push({
			title,
			body,
		});
		saveNotes(notes);
		console.log(chalk.bold.green.inverse("Note Added Successfully!"));
		console.log(chalk.bold("Title: "), chalk.bold.green(title));
		console.log("Body: ", chalk.magenta(body));
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
		console.log(chalk.bold("Title: "), chalk.bold.red(title));
	} else {
		console.log(chalk.bold.red.inverse("Note does not exist!"));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.bold.yellow.underline.inverse("Your Notes"));
	notes.forEach((note, index) => {
		console.log(chalk.bold.cyan(index + 1 + ") "), chalk.cyan(note.title));
	});
};

const readNote = title => {
	const notes = loadNotes();
	const note = notes.find(note => note.title === title);

	if (note) {
		console.log(chalk.bold("Title: "), chalk.bold.green(note.title));
		console.log("Body: ", chalk.magenta(note.body));
	} else {
		console.log(chalk.bold.red.inverse("Note does not exist!"));
	}
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
	addNote,
	removeNote,
	listNotes,
	readNote,
};
