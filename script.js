function calcOperation() {
  if (
    document.querySelector('input#number1').value != '' &&
    document.querySelector('input#number2').value != ''
  ) {
    const number1 = document.querySelector('input#number1').value
    console.log(number1)
    const number2 = document.querySelector('input#number2').value
    console.log(number2)
    const result = Number(number1) + Number(number2)
    document.querySelector('input#result').value = result
  } else {
    document.querySelector('input#result').value = '';
  }
}


function operationSign() {
  
}

