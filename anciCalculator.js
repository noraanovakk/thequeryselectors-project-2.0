function anciinsert(num) {
  var anciOpEmp = document.querySelector('#anciOperators').value === 'empty';
  if (anciOpEmp === true) {
    document.calculator.anciNumber1.value =
      document.calculator.anciNumber1.value + num;
  } else {
    document.calculator.anciNumber2.value =
      document.calculator.anciNumber2.value + num;
  }
}

function myFunctionEq() {
  var numberInput1 = parseFloat(
    document.querySelector('#anciNumber1').value,
    10
  );

  var numberInput2 = parseFloat(
    document.querySelector('#anciNumber2').value,
    10
  );

  var anciOper = document.querySelector('#anciOperators').value;

  if (anciOper === 'anciPlus') {
    document.querySelector('#anciResult').value = numberInput1 + numberInput2;
  }
  if (anciOper === 'anciMinus') {
    document.querySelector('#anciResult').value = numberInput1 - numberInput2;
  }
  if (anciOper === 'anciMultiply') {
    document.querySelector('#anciResult').value = numberInput1 * numberInput2;
  }
  if (anciOper === 'anciDivision') {
    document.querySelector('#anciResult').value = numberInput1 / numberInput2;
  }
  if (anciOper === 'anciDivisionWithRemainder') {
    document.querySelector('#anciResult').value = numberInput1 % numberInput2;
  }
  if (anciOper === 'anciInvolving') {
    document.querySelector('#anciResult').value = numberInput1 ** numberInput2;
  }
}