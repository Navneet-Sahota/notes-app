const fs = require("fs");

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

const deleteAllNotes = () => {
	try {
		fs.unlinkSync("notes.json");
	} catch (err) {
		return err;
	}
};

module.exports = {
	saveNotes,
	loadNotes,
	deleteAllNotes,
};
