const chalk = require("chalk");
const utils = require("./utils");

const addNote = (title, body) => {
	if (title === "") {
		console.log(chalk.bold.red.inverse("Note title can't be empty string!"));
		return;
	}
	const notes = utils.loadNotes();
	const isTitlePresent = notes.find(note => note.title === title);

	if (!isTitlePresent) {
		notes.push({
			title,
			body,
		});
		utils.saveNotes(notes);
		console.log(chalk.bold.green.inverse("Note Added Successfully!"));
		console.log(chalk.bold("Title: "), chalk.bold.green(title));
		console.log("Body: ", chalk.magenta(body));
	} else {
		console.log(chalk.bold.red.inverse("Note title taken!"));
	}
};

const removeNote = title => {
	const notes = utils.loadNotes();
	const isTitlePresent = notes.find(note => note.title === title);

	if (isTitlePresent) {
		const updatedNotes = notes.filter(note => note.title !== title);
		utils.saveNotes(updatedNotes);
		console.log(chalk.bold.green.inverse("Note Removed Successfully!"));
		console.log(chalk.bold("Title: "), chalk.bold.red(title));
	} else {
		console.log(chalk.bold.red.inverse("Note does not exist!"));
	}
};

const listNotes = () => {
	const notes = utils.loadNotes();
	console.log(chalk.bold.yellow.underline.inverse("Your Notes"));
	notes.forEach((note, index) => {
		console.log(chalk.bold.cyan(index + 1 + ") "), chalk.cyan(note.title));
	});
};

const readNote = title => {
	const notes = utils.loadNotes();
	const note = notes.find(note => note.title === title);

	if (note) {
		console.log(chalk.bold("Title: "), chalk.bold.green(note.title));
		console.log("Body: ", chalk.magenta(note.body));
	} else {
		console.log(chalk.bold.red.inverse("Note does not exist!"));
	}
};

const removeAllNotes = () => {
	const notes = utils.loadNotes();
	if (!notes.length) {
		console.log(chalk.bold.red.inverse("There are no notes to be removed!"));
	} else {
		const err = utils.deleteAllNotes();
		if (err) {
			console.log(chalk.bold.red.inverse(err));
		} else {
			console.log(chalk.bold.green.inverse("All Notes Removed Successfully!"));
		}
	}
};

module.exports = {
	addNote,
	removeNote,
	listNotes,
	readNote,
	removeAllNotes,
};
