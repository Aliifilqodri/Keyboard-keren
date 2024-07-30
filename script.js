document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        handleKeyPress(key);
    });
});

document.addEventListener('keydown', event => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
        handleKeyPress(key);
    }
});

function handleKeyPress(key) {
    key.classList.add('bounce');
    setTimeout(() => {
        key.classList.remove('bounce');
    }, 300);

    const output = document.getElementById('output');
    const keyValue = key.textContent;

    if (keyValue === 'Backspace') {
        output.value = output.value.slice(0, -1);
    } else if (keyValue === 'Enter') {
        output.value += '\n';
    } else if (keyValue === 'Tab') {
        output.value += '\t';
    } else if (keyValue === 'Space') {
        output.value += ' ';
    } else if (keyValue === 'Caps Lock' || keyValue === 'Shift' || keyValue === 'Ctrl' || keyValue === 'Alt' || keyValue === 'Win' || keyValue === 'Menu') {
        // Ignore these keys
    } else {
        output.value += keyValue;
    }
}
