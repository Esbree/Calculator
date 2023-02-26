/*----------BASIC FUNCTIONS----------*/
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

/*----------OPERATE FUNCTION----------*/
function operate(operator, a, b) {
  a = Number(a) // Variable wird in jedem Fall zu Number
  b = Number(b)

  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case 'x':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}


let firstOperand = 0
let secondOperand = 0
let operator = ''

function setFirstOperand(number) {
  firstOperand = parseInt(number)
}

function setSecondOperand(number) {
  secondOperand = parseInt(number)
}

const numberButtons = document.querySelectorAll('[data-number]')
const display = document.querySelector('[data-screen]')

numberButtons.forEach((button) => {
  button.addEventListener('click', function() {
    display.innerText += button.innerText
  })
})

const operationButtons = document.querySelectorAll('[data-operation]')
const previousDisplay = document.querySelector('[data-previous]')

operationButtons.forEach((button) => {
  button.addEventListener('click', function() {
    // firstOperand speichern
    let number = parseInt(display.innerText)
    setFirstOperand(number)
    display.innerText = ''
    // operator speichern
    operator = button.innerText
  })
})

const equalsButton = document.querySelector('[data-equal]')

equalsButton.addEventListener('click', function() {
  let number = parseInt(display.innerText)
  setSecondOperand(number)
  display.innerText = operate(operator, firstOperand, secondOperand)
})