const sentence = "hello there from lighthouse labs";

const arraySentence = sentence.split("");

// looping through our Array of words

for (let i = 0; i < arraySentence.length; i++) {
// time out function that logs word i after 500 ms interval.
    setTimeout(function() {
      process.stdout.write(arraySentence[i])

    }, i * 500);}
    setTimeout(function() {
      console.log("\n")

    },(arraySentence.length * 500));
   



  // worked on this with David Figueroa in paired programming