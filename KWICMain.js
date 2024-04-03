class KWICMain {
    static run(inputLines, noiseWords) {
        const shiftedLines = CircularShifter.shiftLines(inputLines);
        const filteredLines = NoiseFilter.filterNoiseWords(shiftedLines, noiseWords);
        const sortedLines = Sort.sortLines(filteredLines);
        Output.displayLines(sortedLines);
    }
}
