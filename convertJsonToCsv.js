const fs = require('fs');

const { Command } = require('commander');
const program = new Command();

program
  .requiredOption('--input <path>', 'the path to the Json file')
  .requiredOption('--output <path>', 'the path of csv file output')
  .option('-h, --header [headers...]', 'header for csv file if json file is a single object');

program.parse();

const { input, output, header } = program.opts();

try {
  readFile();
} catch (err) {
  console.log(err);
}

function readFile() {
  const readFile = fs.readFileSync(input, 'utf-8');
  const data = JSON.parse(readFile);
  Array.isArray(data) ? jsonArrayToCsv(data) : jsonObjectToCsv(data);
}

function writeFile(header, convertedData) {
  const csv = [header, ...convertedData].join('\n');
  fs.writeFile(output, csv, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function jsonObjectToCsv(jsonData) {
  const convertedData = Object.entries(jsonData);
  writeFile(header, convertedData);
}

function jsonArrayToCsv(jsonData) {
  const header = Object.keys(jsonData[0]);
  const convertedData = jsonData.map((item) => {
    return Object.values(item);
  });
  writeFile(header, convertedData);
}
