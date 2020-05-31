/**
 * prints a histogram of the frequencies
 * of different characters
 */
process.stdin.on('readable', () => {
    let chunk;
    while (null !== (chunk = process.stdin.read())) {
        const IN = 1, OUT = 0;
        let frequencies = new Array(26).fill(0);
        let state = OUT, index = 0;
        chunk.forEach(char => {
            if (65 <= char && 90 >= char) {
                index = char - 65;
                state = IN;
            } else if (97 <= char && 122 >= char) {
                index = char - 97;
                state = IN;
            }
            if (state === IN) {
                ++frequencies[index];
                state = OUT;
            }
        });
        
        let longest = Math.max(...frequencies);
        for (let i = longest; i > 0; --i) {
            let scale = '| ';
            for (let j = 0; j < frequencies.length; ++j) {
                if (i > frequencies[j]) {
                    scale += ' ';
                } else {
                    scale += 'X';
                }
            }
            console.log(scale);
        }

        console.log('|_' + '_'.repeat(frequencies.length));

        let bottom = '  ';
        for (let i = 0; i < frequencies.length; ++i) {
            bottom += String.fromCharCode(i + 65);
        }
        console.log(bottom);
    }
});