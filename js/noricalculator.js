//var noriNum1 = parseFloat(document.querySelectorAll('.noriNumberInput').value, 10);
//var noriNum2 = parseFloat(document.querySelectorAll('.noriNumberInput').value, 10);

//function noriNumber() {
//  document.querySelector('#noriFirstNumberInput').value = noriNum1;
//  document.querySelector('#noriSecondNumberInput').value = noriNum2;
//}

var noriNum1 = function noriNumber() {
  document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelectorAll('.noriNumberInput').value, 10);
};

var noriNum2 = function noriNumber() {
  document.querySelector('#noriSecondNumberInput').value = parseFloat(document.querySelectorAll('.noriNumberInput').value, 10);
};

function noriCalculate() {
  var noriOperation = document.querySelector('#noriOperationSelect').value;
  if (noriOperation === 'plus') {
    document.querySelector('#noriResultInput').value = noriNum1 + noriNum2;
  }
  if (noriOperation === 'minus') {
    document.querySelector('#noriResultInput').value = noriNum1 - noriNum2;
  }
  if (noriOperation === 'multiply') {
    document.querySelector('#noriResultInput').value = noriNum1 * noriNum2;
  }
  if (noriOperation === 'divide') {
    document.querySelector('#noriResultInput').value = noriNum1 / noriNum2;
  }
  if (noriOperation === 'power') {
    document.querySelector('#noriResultInput').value = noriNum1 ** noriNum2;
  }
  if (noriOperation === 'remdivide') {
    document.querySelector('#noriResultInput').value = noriNum1 % noriNum2;
  }
}
