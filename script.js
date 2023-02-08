function calcOperation() {
  if (
    document.querySelector('input#number1').value != '' &&
    document.querySelector('input#number2').value != ''
  ) {
    const number1 = document.querySelector('input#number1').value
    const number2 = document.querySelector('input#number2').value
    const operation = document.querySelector('select#operationChoice').value

    var result = '';
    switch (operation) {
      case 'add':
        result = Number(number1) + Number(number2)
        break
      case 'sub':
        result = Number(number1) - Number(number2)
        break
      case 'multi':
        result = Number(number1) * Number(number2)
        break
      case 'div':
        result = Number(number1) / Number(number2)
        break

    }

    document.querySelector('input#result').value = result
  } else {
    document.querySelector('input#result').value = '';
  }
}

function changeSign() {
  calcOperation()
  const operation = document.querySelector('select#operationChoice').value

  switch (operation) {
    case 'add':
      document.querySelector("span#operationSign").textContent = "+"
      break
    case 'sub':
      document.querySelector("span#operationSign").textContent = "-"
      break
    case 'multi':
      document.querySelector("span#operationSign").textContent = "x"
      break
    case 'div':
      document.querySelector("span#operationSign").textContent = "/"
      break

  }
}