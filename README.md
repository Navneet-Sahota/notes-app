# notes-app
A CLI tool to keep up with your tasks.

## Quick Overview

Fork, clone and then just run this command to get started.
```sh
npm i
```

To get the list of available commands, run:
```sh
node app.js --help
```

## Adding a Note

To add a note, you need to provide title and body of note. it can be done as follow:
```sh
npm start add --title="Note title to be added" --body="....."
```
or you can use aliases,
```sh
npm start add -t "Note title to be added" -b="....."
```

## Removing a Note

To remove a note, you need to provide title of the note you want to remove.
```sh
npm start remove --title "Note title to be removed"
```

## List all Notes

To get list of all notes, run:
```sh
npm start list
```

## Read a Note

To read a note with its title and body, run:
```sh
npm start read -t "Note title to be read"
```


##### I did this project to get some familiarity with node file system module. If you have some more ideas, feel free to contribute here. 
