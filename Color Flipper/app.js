const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});

function getRandomColor() {
    const hexCharacters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
}
