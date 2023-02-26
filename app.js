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