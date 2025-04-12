const display = document.getElementById('calculator-display');

function appendToDisplay(value) {
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/'];

  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  if (value === '.' && lastChar === '.') {
    return;
  }

  if (display.value === '0' || display.value === 'Error') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function backspace() {
  if (display.value.length > 1 && display.value !== 'Error') {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
display.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateResult();
  } else if (event.key === "Escape") {
    clearDisplay();
}
});