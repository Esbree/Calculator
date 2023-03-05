/*----------BASIC FUNCTIONS----------*/
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

/*----------OPERATE FUNCTION----------*/
function operate(operator, a, b) {
  a = Number(a); // Variable wird in jedem Fall zu Number
  b = Number(b);

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '/':
      if (b === 0) {
        alert('You cannot divide by zero!');
        display.innerText = '';
        firstOperand = null;
        secondOperand = null;
        operators = [];
      } else return divide(a, b);
    default:
      return null;
  }
}

/*----------VARIABLES----------*/
let firstOperand = null;
let secondOperand = null;
let operators = [];
let dotButtonState = false; // kann nur einen Punkt gleichzeitig setzen

/*----------HELPER FUNCTIONS----------*/
function setFirstOperand(number) {
  firstOperand = parseFloat(number);
}

function setSecondOperand(number) {
  secondOperand = parseFloat(number);
}

/*----------NUMBER BUTTONS----------*/
const numberButtons = document.querySelectorAll('[data-number]');
const display = document.querySelector('[data-screen]');

numberButtons.forEach((button) => {
  button.addEventListener('click', function () {
    display.innerText += button.innerText; // laesst Zahlen auf Display erscheinen
  });
});

/*----------OPERATION BUTTONS----------*/
const operationButtons = document.querySelectorAll('[data-operation]');

operationButtons.forEach((button) => {
  button.addEventListener('click', function () {
    operators.push(button.innerText);
    if (firstOperand == null) {
      setFirstOperand(parseFloat(display.innerText));
    } else if (secondOperand == null) {
      setSecondOperand(parseFloat(display.innerText));
    } else {
      setFirstOperand(operate(operators[0], firstOperand, secondOperand));
      operators.shift();
      setSecondOperand(parseFloat(display.innerText));
    }
    display.innerText = '';
    dotButtonState = false;
  });
});

/*----------EQUALS BUTTON----------*/
const equalsButton = document.querySelector('[data-equal]');

equalsButton.addEventListener('click', function () {
  if (operators.length > 1) {
    setFirstOperand(operate(operators[0], firstOperand, secondOperand));
    operators.shift();
    setSecondOperand(parseFloat(display.innerText));
  }
  if (operators.length == 1) {
    setSecondOperand(parseFloat(display.innerText));
  }
  if (operators.length == 0) {
    setFirstOperand(parseFloat(display.innerText));
    display.innerText = firstOperand;
    if (firstOperand == null) {
      display.innerText = 0;
    }
  } else {
    display.innerText = operate(operators[0], firstOperand, secondOperand);
  }
  dotButtonState = false;
});

/*----------CLEAR BUTTON----------*/
const clearButton = document.querySelector('[data-clear]');

clearButton.addEventListener('click', function () {
  display.innerText = '';
  firstOperand = null;
  secondOperand = null;
  operators = [];
  dotButtonState = false;
});

/*----------DELETE BUTTON----------*/
const deleteButton = document.querySelector('[data-delete]');

deleteButton.addEventListener('click', function () {
  if (display.innerText != '') {
    let displayStr = display.innerText;
    if (display.innerText.charAt(displayStr.length - 1) == '.') {
      dotButtonState = false;
    }
    displayStr = displayStr.slice(0, -1);
    display.innerText = displayStr;
  }
});

/*----------DOT BUTTON----------*/
const dotButton = document.querySelector('[data-dot]');

dotButton.addEventListener('click', function () {
  if (!dotButtonState) {
    display.innerText += dotButton.innerText;
    dotButtonState = true;
  }
});
