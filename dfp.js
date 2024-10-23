const fs = require('fs');

// Neccessary files for this task:
const inputFile = "datafile.csv"
const outputFile = "outputFile,csv"

function parseFile (indata, outdata, delimiter = ';') {
  // If input file does not exist:
  if (!fs.existsSync(indata)){
    return -1
  }

  // Delete any exisitng outputfile
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
  }
  
  // Input the dataset into the function
  const data = fs.readFileSync(indata, "utf-8");
  // Separates each review to one line
  // .slice(1) removes the first line which is: 'review; sentiment'
  const lines = data.split(/\n/).slice(1);

  // Creating a total of the reviews
  let totalReviews = 0 
  // Going through each review:
  for (let line of lines) {
    const trimmed = line.trim();
   
    // Split the Review and Positive/Negative remark:
    const Element = trimmed.split(delimiter);
    // Taking the first 20 characters of the review
    const review = Element[0].trim().substring(0,20)
    // Taking the postivie/negative of the review 
    const posOrNeg = Element[1].trim()
    // Creating the Output switching the order:
    const outputLine = `${posOrNeg}${delimiter}${review}\n`
    // Outputting to a file
    fs.appendFileSync(outdata, outputLine);
    // Adding to total reviews after each review
    totalReviews++
  }
  return totalReviews
}

parseFile(inputFile, outputFile)

// Leave this code here for the automated tests
module.exports = {
  parseFile,
}