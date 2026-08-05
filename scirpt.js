const statusText = document.querySelector('#status-text');
const powerButton = document.querySelector('#power-btn');

powerButton.addEventListener('click', () => {
    statusText.textContent = "System is Online. Welcome back.";
    statusText.style.color = "green";
});