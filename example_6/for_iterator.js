/**
  * prints one letter per line
  */
process.stdin.on("readable", () => {
  let chunk;
  while (null !== (chunk = process.stdin.read())) {
    for (let char of chunk) {
      if (10 !== char && 13 !== char) {
        console.log(String.fromCharCode(char));
      }
    }
  }
});
