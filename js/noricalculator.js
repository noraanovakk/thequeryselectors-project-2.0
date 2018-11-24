function noriNum(num) {
  var emptyOperation = document.querySelector('#noriOperationSelect').value === 'empty';
  if (emptyOperation === true) {
    document.querySelector('#noriFirstNumberInput').value = document.querySelector('#noriFirstNumberInput').value + num;
  }  else if (emptyOperation === false) {
    document.querySelector('#noriSecondNumberInput').value = document.querySelector('#noriSecondNumberInput').value + num;
  }
}

function noriCalculate() {
  var noriOperation = document.querySelector('#noriOperationSelect').value;
  if (noriOperation === 'plus') {
    document.querySelector('#noriResultInput').value =  parseFloat(document.querySelector('#noriFirstNumberInput').value) +  parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'minus') {
    document.querySelector('#noriResultInput').value =  parseFloat(document.querySelector('#noriFirstNumberInput').value) -  parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'multiply') {
    document.querySelector('#noriResultInput').value =  parseFloat(document.querySelector('#noriFirstNumberInput').value) *  parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'divide') {
    document.querySelector('#noriResultInput').value =  parseFloat(document.querySelector('#noriFirstNumberInput').value) /  parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'power') {
    document.querySelector('#noriResultInput').value =  parseFloat(document.querySelector('#noriFirstNumberInput').value) **  parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'remdivide') {
    document.querySelector('#noriResultInput').value =  parseFloat(document.querySelector('#noriFirstNumberInput').value) %  parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
}
function noriReset() {
  document.getElementById('noriResetInput').reset();
}
