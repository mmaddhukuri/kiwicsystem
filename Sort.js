class Sort {
    static sortLines(lines) {
        return lines.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    }
}
