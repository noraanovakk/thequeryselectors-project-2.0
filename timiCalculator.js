function insert(num) {
  var tUres = document.querySelector('#tOperatorz').value === 'empty';
  if (tUres === true) {
    document.calculator.tNumOne.value = document.calculator.tNumOne.value + num;
  } else {
    document.calculator.tNumTwo.value = document.calculator.tNumTwo.value + num;
  }
}


function tSzamol() {
  var elsoSzam = parseFloat(
    document.querySelector('#tNumOne').value, 10);

  var masodikSzam = parseFloat(
    document.querySelector('#tNumTwo').value, 10);

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