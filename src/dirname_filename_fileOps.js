const path = require("path");
const fs = require("fs");

// FILENAME
console.log(__filename);

// DIRNAME
console.log(__dirname);

// To reach upper dir
const parentDir = path.join(__dirname, "..");
console.log(parentDir);

//CREATING FILE with content
const fileName = "fileOpsTest.txt";
const filePath = path.join(__dirname, fileName);
const content = "Hello World";

function fileCheck(pth) {
  return fs.existsSync(pth);
}

if (fileCheck(filePath)) {
  console.log(`File already created as ${fileName}`);
} else {
  fs.writeFile(filePath, content, "utf-8", (err) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(`File has Created as ${fileName}`);
    }
  });
}

//DATA WRITING

console.log("Waiting for data writing...");
setTimeout(() => {
  if (fileCheck(filePath)) {
    const dataWriter = fs.createWriteStream(filePath, { encoding: "utf-8" });
    if (dataWriter.writable) {
      dataWriter.write(content + "\nNew Line");
      dataWriter.end();
      console.log("New line has added");
    } else {
      console.log(`${fileName} is not writeable`);
    }
  } else {
    console.log(`There is no any file as ${fileName}`);
  }
}, 2000);

//READING FILE
console.log("Waiting for data reading...");
setTimeout(() => {
  if (fileCheck(filePath)) {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log(`The Data has read as: ${data}`);
      }
    });
  } else {
    console.log(`There is no any file as ${fileName}`);
  }
}, 3000);
