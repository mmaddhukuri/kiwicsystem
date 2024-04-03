class NoiseFilter {
    static filterNoiseWords(lines, noiseWords) {
        return lines.filter(line => !noiseWords.includes(line.split(' ')[0].toLowerCase()));
    }
}
