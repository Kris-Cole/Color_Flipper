
document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('toggle-color');
    const hexCode = document.getElementById('hex-code');
    
    function generateRandomColor() {
        // Generate a random number for each component (R, G, B)
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
    
    
    colorButton.addEventListener('click', () => {
        // Generate random color
        const randomColor = generateRandomColor();

        // Apply the color to the background
        document.body.style.backgroundColor = randomColor;

        // Update the displayed hex code
        hexCode.textContent = randomColor;
        hexCode.style.textTransform = 'uppercase';
    });
});