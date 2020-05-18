/**
  * prints length of received string in bytes
  */
process.stdin.on("readable", () => {
  let chunk;
  while (null !== (chunk = process.stdin.read())) {
    console.log(`Received ${chunk.length} bytes of data.`);
  }
});
