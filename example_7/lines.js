/**
  * prints one word per line
  */
process.stdin.on("readable", () => {
  let chunk;
  while (null !== (chunk = process.stdin.read())) {
    let prev, line = '';
    for (let char of chunk) {
      if (32 === char || 9 === char) {
        if (prev !== 32 && prev !== 9) {
          line += '\n';
        }
      } else if (10 !== char && 13 !== char) {
        line += String.fromCharCode(char);
      }
      prev = char;
    }
    console.log(line);
  }
});
