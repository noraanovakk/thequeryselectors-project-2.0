function noriNumber1() {
  if (document.hasFocus('#noriFirstNumberInput') ) {
    document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
  }
  if (document.hasFocus('#noriSecondNumberInput') ) {
    document.querySelector('#noriSecondNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
  }
}


function noriNumber2() {
  if (document.hasFocus('#noriFirstNumberInput') ) {
    document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberTwo').value, 10);
  }
  if (document.hasFocus('#noriSecondNumberInput') ) {
    document.querySelector('#noriSecondNumberInput').value = parseFloat(document.querySelector('#numberTwo').value, 10);
  }
}
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
// function noriNumber1() {
//   document.querySelector('#noriFirstNumberInput').value = parseFloat(document.querySelector('#numberOne').value, 10);
// }
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