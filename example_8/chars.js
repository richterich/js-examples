/**
 * prints amount of different characters in input
 */
process.stdin.on("readable", () => {
  let chunk;
  while (null !== (chunk = process.stdin.read())) {
    let stats = { tabs: 0, spaces: 0, chars: 0, lines: 0 };
    for (let char of chunk) {
      if (32 === char) {
        ++stats.spaces;
      } else if (10 === char || 13 === char) {
        ++stats.lines;
      } else if (9 === char) {
        ++stats.tabs;
      } else {
        ++stats.chars;
      }
    }
    console.table(stats);
  }
});
