/**
 * replacing one or more blanks by a single blank.
 */
process.stdin.on('readable', () => {
    let chunk;
    while (null !== (chunk = process.stdin.read())) {
        let last,
            line = '';
        for (let char of chunk) {
            if (10 !== char && 13 !== char) {
                if (32 !== last || 32 !== char) {
                    line += String.fromCharCode(char);
                    last = char;
                }
            }
        }
        console.log(line);
    }
});
