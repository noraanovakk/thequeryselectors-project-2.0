function danInsert(num) {
  var operatorValueDefault =
    document.querySelector('#daniOperator').value === 'default';
  if (operatorValueDefault === true) {
    document.querySelector('#daniNum1').value += num;
  } else if (operatorValueDefault === false) {
    document.querySelector('#daniNum2').value += num;
  }
}

function daniCalculate() {
  var daniOperator = document.querySelector('#daniOperator').value;
  var dNum1 = parseFloat(document.querySelector('#daniNum1').value, 10);
  var dNum2 = parseFloat(document.querySelector('#daniNum2').value, 10);
  var daniEredmeny;

  if (daniOperator === '+') {
    daniEredmeny = dNum1 + dNum2;
  } else if (daniOperator === '-') {
    daniEredmeny = dNum1 - dNum2;
  } else if (daniOperator === '*') {
    daniEredmeny = dNum1 * dNum2;
  } else if (daniOperator === '/') {
    daniEredmeny = dNum1 / dNum2;
  } else if (daniOperator === '%') {
    daniEredmeny = dNum1 % dNum2;
  } else if (daniOperator === '**') {
    daniEredmeny = dNum1 ** dNum2;
  }

  document.querySelector('#daniResult').value = daniEredmeny;
  document.querySelector('#daniOperator').value = 'default';
  document.querySelector('#daniNum1').value = '';
  document.querySelector('#daniNum2').value = '';
}
