const chalk = require("chalk");
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
yargs.command("remove", "Remove an existing note", () => {
	console.log(chalk.red("Removing Note!"));
});

// Create remove command
yargs.command("list", "List all the notes", () => {
	console.log(chalk.blue("Listing all Notes!"));
});

// Create remove command
yargs.command("read", "Read description of existing note", () => {
	console.log(chalk.blue("Reading Note!"));
});

yargs.parse();
