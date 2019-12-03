const sentence = "hello there from lighthouse labs";

let delay = 0; 

const concatSentence = `${sentence} \n`

function printSentence() {

for (const char of concatSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50)
}
}

printSentence()