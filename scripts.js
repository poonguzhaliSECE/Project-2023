 
// scripts.js

// Function to show message with animation
function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageElement.style.opacity = '1';
    messageElement.style.transition = 'opacity 1s';

    setTimeout(() => {
        messageElement.style.opacity = '0';
    }, 3000); // 3000 milliseconds = 3 seconds
}

document.getElementById('rechargeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const amount = document.getElementById('amount').value;

    // Dummy recharge request
    fetch('/recharge', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, amount }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                showMessage('Recharge successful!', '#28a745');
            } else {
                showMessage('Recharge failed. Please try again.', '#dc3545');
            }
        })
        .catch((error) => console.error('Error:', error));
});

