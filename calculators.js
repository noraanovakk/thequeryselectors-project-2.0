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

function noriNum(num) {
  var emptyOperation =
    document.querySelector('#noriOperationSelect').value === 'empty';
  if (emptyOperation === true) {
    document.querySelector('#noriFirstNumberInput').value =
      document.querySelector('#noriFirstNumberInput').value + num;
  } else if (emptyOperation === false) {
    document.querySelector('#noriSecondNumberInput').value =
      document.querySelector('#noriSecondNumberInput').value + num;
  }
}

function noriCalculate() {
  var noriOperation = document.querySelector('#noriOperationSelect').value;
  if (noriOperation === 'plus') {
    document.querySelector('#noriResultInput').value =
      parseFloat(document.querySelector('#noriFirstNumberInput').value) +
      parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'minus') {
    document.querySelector('#noriResultInput').value =
      parseFloat(document.querySelector('#noriFirstNumberInput').value) -
      parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'multiply') {
    document.querySelector('#noriResultInput').value =
      parseFloat(document.querySelector('#noriFirstNumberInput').value) *
      parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'divide') {
    document.querySelector('#noriResultInput').value =
      parseFloat(document.querySelector('#noriFirstNumberInput').value) /
      parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'power') {
    document.querySelector('#noriResultInput').value =
      parseFloat(document.querySelector('#noriFirstNumberInput').value) **
      parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
  if (noriOperation === 'remdivide') {
    document.querySelector('#noriResultInput').value =
      parseFloat(document.querySelector('#noriFirstNumberInput').value) %
      parseFloat(document.querySelector('#noriSecondNumberInput').value);
  }
}

function noriReset() {
  document.getElementById('noriResetInput').reset();
}

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

function selectReni(num) {
  var operatorValueSelect =
    document.getElementById('operatorReni').value === 'selectR';
  if (operatorValueSelect === true) {
    document.getElementById('num1Reni').value += num;
  } else if (operatorValueSelect === false) {
    document.getElementById('num2Reni').value += num;
  }
}

function calcReni() {
  var num1R = parseFloat(document.getElementById('num1Reni').value, 10);
  var num2R = parseFloat(document.getElementById('num2Reni').value, 10);
  var opReni = document.getElementById('operatorReni').value;

  if (opReni === '+') {
    document.getElementById('resultReni').value = num1R + num2R;
  }
  if (opReni === '-') {
    document.getElementById('resultReni').value = num1R - num2R;
  }
  if (opReni === '*') {
    document.getElementById('resultReni').value = num1R * num2R;
  }
  if (opReni === '/') {
    document.getElementById('resultReni').value = num1R / num2R;
  }
  if (opReni === '%') {
    document.getElementById('resultReni').value = num1R % num2R;
  }
  if (opReni === '**') {
    document.getElementById('resultReni').value = num1R ** num2R;
  }
}

function tinsert(num) {
  var tUres = document.querySelector('#tOperatorz').value === 'empty';
  if (tUres === true) {
    document.tcalculator.tNumOne.value =
      document.tcalculator.tNumOne.value + num;
  } else {
    document.tcalculator.tNumTwo.value =
      document.tcalculator.tNumTwo.value + num;
  }
}

function tSzamol() {
  var elsoSzam = parseFloat(document.querySelector('#tNumOne').value, 10);

  var masodikSzam = parseFloat(document.querySelector('#tNumTwo').value, 10);

  var tOP = document.querySelector('#tOperatorz').value;

  if (tOP === 'tPlus') {
    document.querySelector('#tResult').value = elsoSzam + masodikSzam;
  }
  if (tOP === 'tMinus') {
    document.querySelector('#tResult').value = elsoSzam - masodikSzam;
  }
  if (tOP === 'tMultiply') {
    document.querySelector('#tResult').value = elsoSzam * masodikSzam;
  }
  if (tOP === 'tDiv') {
    document.querySelector('#tResult').value = elsoSzam / masodikSzam;
  }
  if (tOP === 'tDWithR') {
    document.querySelector('#tResult').value = elsoSzam % masodikSzam;
  }
  if (tOP === 'tInvo') {
    document.querySelector('#tResult').value = elsoSzam ** masodikSzam;
  }
}
