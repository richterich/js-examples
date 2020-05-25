/**
 * makes blanks and tabs visible
 */
process.stdin.on('readable', () => {
    let chunk;
    while (null !== (chunk = process.stdin.read())) {
        let line = '';
        chunk.forEach(char => {
            if (10 !== char && 13 !== char) {
                if (32 === char) {
                    line += '\\s';
                } else if (9 == char) {
                    line += '\\t';
                } else {
                    line += String.fromCharCode(char);
                }
            }
        });
        console.log(line);
    }
});
