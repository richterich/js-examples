/**
 * prints a vertical histogram of the length of words
 */
process.stdin.on('readable', () => {
    let chunk;
    while (null !== (chunk = process.stdin.read())) {
        const IN = 1, OUT = 0;
        let amount = 0, state = OUT, longest = 0;
        let data = [];
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
                if (state === IN) {
                    if (data.length < amount) {
                        data.push(0);
                    }
                    ++data[amount - 1];
                }
            }
        });

        console.log(`${amount} word(s) in input.`);

        longest = Math.max(...data);
        for (let i = longest; i > 0; --i) {
            let scale = '';
            for (let j = 0; j < data.length; ++j) {
                if (i > data[j]) {
                    scale += ' ';
                } else {
                    scale += 'X';
                }
            }
            console.log(scale);
        }
    }
});
