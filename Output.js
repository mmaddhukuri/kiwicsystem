class Output {
    static displayLines(lines) {
        const kwicList = document.getElementById('kwicList');
        kwicList.innerHTML = '';
        lines.forEach(line => {
            const listItem = document.createElement('li');
            listItem.textContent = line;
            kwicList.appendChild(listItem);
        });
    }
}
