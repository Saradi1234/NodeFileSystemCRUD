const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent, (err) => {
		if (err) {
			console.log(err);
		}
	})
	console.log((`${fileName} file created`));
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let data = await fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
		if (err) {
			console.log(err);
		}
	})
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, (err) => {
		if (err) {
			console.log(err);
		}
	})
	console.log((`New content added in ${fileName} file`));
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, (err) => {
		if (err) {
			console.log(err);
		}
	})
	console.log((`${fileName} file successfully deleted`));
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }