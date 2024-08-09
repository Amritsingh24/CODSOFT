document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    // Function to update the display
    function updateDisplay() {
        display.value = currentInput || '0';
    }

    // Handle button clicks
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;

            if (value === 'AC') {
                // Clear the display
                currentInput = '';
                previousInput = '';
                operator = '';
            } else if (value === 'DE') {
                // Delete last character
                currentInput = currentInput.slice(0, -1);
            } else if (value === '=') {
                // Calculate the result
                try {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                    operator = '';
                    previousInput = '';
                } catch (e) {
                    currentInput = 'Error';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Set the operator and prepare for the next input
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            } else {
                // Append the number or decimal point
                currentInput += value;
            }

            updateDisplay();
        });
    });

    // Initialize display
    updateDisplay();
});