function start() {
  var buttonCalculateImc = document.querySelector('#button-calculator-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  handleButtonClick();
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
}

function calculatorImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculatorImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  evaluetionImc();
}

function evaluetionImc() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcEvaluetion = document.querySelector('#imc-evaluetion');
  var evaluetion = '';

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculatorImc(weight, height);

  if (imc > 16 && imc < 16.9) {
    evaluetion = 'Muito abaixo do peso';
  } else if (imc > 17 && imc < 18.4) {
    evaluetion = 'Abaixo do peso';
  } else if (imc > 18.5 && imc < 24.9) {
    evaluetion = 'Peso normal';
  } else if (imc > 25 && imc < 29.9) {
    evaluetion = 'Acima do peso';
  } else if (imc > 30 && imc < 34.9) {
    evaluetion = 'Obesidade grau I';
  } else if (imc > 35 && imc < 39.9) {
    evaluetion = 'Obesidade grau II';
  } else if (imc > 40) {
    evaluetion = 'Obesidade grau III ou Mórbida';
  } else {
    evaluetion = 'Faixa inválida!';
  }

  imcEvaluetion.textContent = evaluetion;
}

start();
