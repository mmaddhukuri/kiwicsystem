class CircularShifter {
    static shiftLines(inputLines) {
        const shiftedLines = [];
        inputLines.forEach(line => {
            const words = line.split(' ');
            for (let i = 0; i < words.length; i++) {
                const shiftedWords = [...words.slice(i), ...words.slice(0, i)];
                shiftedLines.push(shiftedWords.join(' '));
            }
        });
        return shiftedLines;
    }
}
