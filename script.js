const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
let ansValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else if (value === 'DEL') {
      deleteLast();
    } else if (value === '√') {
      calculateSqrt();
    } else if (value === '%') {
      calculatePercentage();
    } else if (value === 'Ans') {
      addToDisplay(ansValue);
    } else {
      if (display.value === 'Error') {
        clear();
      }
      addToDisplay(value);
    }
  });
});

function addToDisplay(value) {
  display.value += value;
}

function calculate() {
  let result = '';
  const expression = display.value;

  try {
    result = eval(expression);
    if (isNaN(result)) {
      throw new Error('Invalid expression');
    }
  } catch (error) {
    result = 'Error';
    clear();
  }

  display.value = result;
  ansValue = result;
}

function clear() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateSqrt() {
  const number = parseFloat(display.value);
  const result = Math.sqrt(number);

  if (isNaN(result)) {
    display.value = 'Error';
    clear();
  } else {
    display.value = result;
    ansValue = result;
  }
}

function calculatePercentage() {
  const number = parseFloat(display.value);
  const result = number / 100;

  display.value = result;
  ansValue = result;
}
