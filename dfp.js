const fs = require('fs');

// Our neccessary files for this task:
const inputFile = "datafile.csv"
const outputFile = "outputFile,csv"
const reviewSummarised = {}

function parseFile (indata, outdata, delimiter = ';') {
  // Delete any exisitng outputfile
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
  }

  // Splits each review 
  const data = fs.readFileSync(indata, "utf-8");
  const lines = data.split(delimiter)
  console.log(lines)
}



  



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}