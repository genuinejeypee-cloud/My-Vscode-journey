// 1. Grab the HTML elements
const statusText = document.querySelector('#status-text');
const powerButton = document.querySelector('#power-btn');
const passcodeInput = document.querySelector('#passcode');

// 2. Listen for the button click
powerButton.addEventListener('click', () => {
    
    // 3. Get the exact text the user typed in
    const enteredCode = passcodeInput.value;

    // 4. Check if the code is correct
    if (enteredCode === "ADMIN") {
        statusText.textContent = "System is Online. Welcome back.";
        statusText.style.color = "green";
    } else {
        statusText.textContent = "Access Denied. Invalid Code.";
        statusText.style.color = "red";
    }
});