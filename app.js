const yargs = require("yargs");
const notes = require("./notes");

// Create add command
yargs.command(
	"add",
	"Add a new note",
	{
		title: {
			alias: "t",
			describe: "Note Title",
			type: "string",
			demandOption: true,
		},
		body: {
			alias: "b",
			describe: "Note Description",
			type: "string",
			demandOption: true,
		},
	},
	argv => {
		notes.addNote(argv.title, argv.body);
	}
);

// Create remove command
yargs.command(
	"remove",
	"Remove an existing note",
	{
		title: {
			alias: "t",
			describe: "Note Title",
			type: "string",
			demandOption: true,
		},
	},
	argv => {
		notes.removeNote(argv.title);
	}
);

// Create list command
yargs.command("list", "List all the notes", () => {
	notes.listNotes();
});

// Create read command
yargs.command(
	"read",
	"Read description of existing note",
	{
		title: {
			alias: "t",
			describe: "Note Title",
			type: "string",
			demandOption: true,
		},
	},
	argv => {
		notes.readNote(argv.title);
	}
);

yargs.parse();
