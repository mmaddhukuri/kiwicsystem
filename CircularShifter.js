class CircularShifter {
    static shiftLines(inputLines) {
        const noiseWords = new Set(["a", "an", "the", "and", "or", "of", "to", "be", "is", "in", "out", "by", "as", "at", "off"]);
        const shiftedLines = [];
        inputLines.forEach(line => {
            const words = line.split(' ');
            const filteredWords = words.filter(word => !noiseWords.has(word.toLowerCase()));
            for (let i = 0; i < filteredWords.length; i++) {
                const shiftedWords = [...filteredWords.slice(i), ...filteredWords.slice(0, i)];
                shiftedLines.push(shiftedWords.join(' '));
            }
        });
        return shiftedLines;
    }
}
