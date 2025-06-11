const { dir } = require("console");
const path = require("path");

//basename
const fileName = path.basename("./text/sample.txt");

//dirname
const dirName = path.dirname("/text/sample.txt");

//extension name
const extName = path.extname("/sample.pdf");
console.log("Filename", fileName);
console.log("Directory Name", dirName);
console.log("Extension Name", extName);

//path.join
const joinedPath = path.join("text", "user", "video", "new.txt");
console.log(joinedPath);

//path.resolve
const absPath = path.resolve("text", "new.txt");
console.log(absPath);
