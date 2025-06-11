const { log } = require("console");
const fs = require("fs");
//Properties of fs
//console.log(fs);
//Read a file -synchronous way
const dataBuffer = fs.readFileSync("./sample.txt");
const content = dataBuffer.toString();
//console.log(content);

//Read a file - asyncronous way
/*fs.readFile("./sample.txt", "utf-8", (err, content) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log(content);
  }
});*/

//write file
/*fs.writeFile("./new.txt", "some new content", (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("File has been written");
  }
});*/

//update with existing file
/*fs.appendFile("./new.txt", "Appended Conntent", (err) => {
  if (err) {
    console.log(error);
    return;
  } else {
    console.log("File Content updated");
  }
});*/

//checking if a file exists
/*fs.access("./new.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.log("File not exists");
    return;
  } else {
    console.log("File exist");
  }
}); */

//delete a file
/*fs.unlink("./new.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File has been deleted");
  }
}); */
const fsPromise = require("fs/promises");
//results shows pending state
/*try {
  const content = fsPromise.readFile("./sample.txt", "utf-8");
  console.log(content);
} catch (error) {
  console.log(err);
} */

const readFileContent = async () => {
  try {
    const content = await fsPromise.readFile("./sample.txt", "utf-8");
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};
readFileContent();
