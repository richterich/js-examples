/**
 * prints amount of words in input
 */
process.stdin.on('readable', () => {
    let chunk;
    while (null !== (chunk = process.stdin.read())) {
        const IN = 1, OUT = 0;
        let amount = 0, state = OUT;
        chunk.forEach(char => {
            if (13 !== char) {
                if (10 === char || 32 === char || 9 === char) {
                    if (state === IN) {
                        state = OUT;
                    }
                } else if (state === OUT) {
                    ++amount;
                    state = IN;
                }
            }
        });
        console.log(`${amount} word(s) in input.`);
    }
});
