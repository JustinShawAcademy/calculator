let display = document.getElementById('result');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.value = 'Hello';
    display.style.fontFamily = 'Orbitron, monospace';
    display.style.color = '#00ff00';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function appendToDisplay(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '' && previousInput === '') return;
        if (operator && currentInput) {
            calculate();
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function updateDisplay() {
    if (previousInput && operator && currentInput) {
        display.value = previousInput + ' ' + operator + ' ' + currentInput;
        display.style.fontFamily = 'Arial, sans-serif';
        display.style.color = 'white';
    } else if (previousInput && operator) {
        display.value = previousInput + ' ' + operator + ' ';
        display.style.fontFamily = 'Arial, sans-serif';
        display.style.color = 'white';
    } else if (currentInput) {
        display.value = currentInput;
        display.style.fontFamily = 'Arial, sans-serif';
        display.style.color = 'white';
    } else {
        display.value = 'Hello';
        display.style.fontFamily = 'Orbitron, monospace';
        display.style.color = '#00ff00';
    }
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    display.value = result;
}