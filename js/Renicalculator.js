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
