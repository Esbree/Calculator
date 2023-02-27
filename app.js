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

let value
let firstOperand = null
let secondOperand = null
let operators = []

function setFirstOperand(number) {
  firstOperand = parseFloat(number)
}

function setSecondOperand(number) {
  secondOperand = parseFloat(number)
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
    operators.push(button.innerText)
    if (firstOperand == null) {
      setFirstOperand(parseFloat(display.innerText))
    }else if (secondOperand == null){
      setSecondOperand(parseFloat(display.innerText))
    }else {
      setFirstOperand(operate(operators[0], firstOperand, secondOperand))
      operators.shift()
      setSecondOperand(parseFloat(display.innerText))
    }
    display.innerText = ''
    console.log(firstOperand, secondOperand, operators);
  })
})

const equalsButton = document.querySelector('[data-equal]')

equalsButton.addEventListener('click', function() {
  if (operators.length > 1) {
    setFirstOperand(operate(operators[0], firstOperand, secondOperand))
    operators.shift()
    setSecondOperand(parseFloat(display.innerText))
  }

  if (operators.length == 1) {
    setSecondOperand(parseFloat(display.innerText))
  }

  if (operators.length == 0) {
    setFirstOperand(parseFloat(display.innerText))
    display.innerText = firstOperand
    if (firstOperand == null) {
      display.innerText = 0
    }
  }else {
    display.innerText = operate(operators[0], firstOperand, secondOperand)
  }

})