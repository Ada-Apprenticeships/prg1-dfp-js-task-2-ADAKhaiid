const fs = require('fs');

// The neccessary files for this task
const inputFile = "datafile.csv";
const outputFile = "outputFile,csv";

// Function to create the output file
function parseFile (indata, outdata, delimiter = ';') {
  // If input file does not exist
  if (!fs.existsSync(indata)){
    return -1;
  }

  // Delete any existing output file
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
  }
  
  // Input the dataset into the function
  const data = fs.readFileSync(indata, "utf-8");
  // Separates each review to one line

  const lines = data.split(/\n/).slice(1);  // .slice(1) removes the first line which is: 'review; sentiment'

  // Creates a total of the reviews
  let totalReviews = 0;
  // Goes through each review:
  for (let line of lines) {
    // Trims the line of white spaces 
    const trimmedLine = line.trim().split(delimiter); // Splits the Review and Positive/Negative remark:
    // Creates individual outputline in order of Remark;Review in 20 characters per line
    const outputLine = `${trimmedLine[1].trim()}${delimiter}${trimmedLine[0].trim().substring(0,20)}\n`;
   
    // Outputting the file
    fs.appendFileSync(outdata, outputLine);
    // Adding to total reviews after each review
    totalReviews++;
  }
  return totalReviews
}

console.log(parseFile(inputFile, outputFile));

// Leave this code here for the automated tests
module.exports = {
  parseFile,
}