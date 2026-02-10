const fs = require("fs");

// Paths
const filePath = "./src/Example_Video.mp4";
const createdFilePath = "./src/Created_Video.mp4";

// Create
const readStreamData = fs.createReadStream(filePath);

// Write (for the transfer process after reading)
const writeStreamData = fs.createWriteStream(createdFilePath);

//Trigger
// DATA SIZE

const fileSize = fs.statSync(filePath).size; // Total size
let dataMount = 0;

readStreamData.on("data", function (chunk) {
  console.log("Data Triggerred");
  console.log(chunk);
  console.log(`Data type ${typeof chunk}`);
  console.log(`Data size ${chunk.length}`);
  dataMount += chunk.length;
  const percent = ((dataMount / fileSize) * 100).toFixed(2);
  console.log(`Reading Progress: %${percent}`);
});

// TRANSFER
readStreamData.pipe(writeStreamData);

// End
readStreamData.on("end", () => {
  console.log("Data reading has ended");
  console.log(`Total Data Byte Size : ${dataMount}`);
  console.log(
    `Total Data MB Size (approx.) : ${(dataMount / 1000 ** 2).toFixed(2)}`,
  );
});

// Errors
readStreamData.on("error", (err) => {
  console.log(`Error while reading : ${err}`);
});

writeStreamData.on("error", (err) => {
  console.log(`Error while writing : ${err}`);
});

// Close
readStreamData.on("close", () => {
  console.log(`Stream has Closed`);
});

writeStreamData.on("finish", () => {
  console.log("✅ Pipe completed successfully (write finished)");
});
