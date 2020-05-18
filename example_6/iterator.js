/**
 * prints one letter per line
 */
process.stdin.on("readable", () => {
  let chunk;
  while (null !== (chunk = process.stdin.read())) {
    let iterator = chunk[Symbol.iterator]();
    let symbol = iterator.next();
    while (!symbol.done && symbol.value !== 10) {
      console.log(String.fromCharCode(symbol.value));
      symbol = iterator.next();
    }
  }
});
