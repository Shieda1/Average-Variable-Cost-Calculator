// https://www.omnicalculator.com/finance/avc

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averageVariableCostRadio = document.getElementById('averageVariableCostRadio');
const variableCostsRadio = document.getElementById('variableCostsRadio');
const totalOutputRadio = document.getElementById('totalOutputRadio');

let averageVariableCost;
let variableCosts = v1;
let totalOutput = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

averageVariableCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Variable Costs';
  variable2.textContent = 'Total Output';
  variableCosts = v1;
  totalOutput = v2;
  result.textContent = '';
});

variableCostsRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Variable Cost';
  variable2.textContent = 'Total Output';
  averageVariableCost = v1;
  totalOutput = v2;
  result.textContent = '';
});

totalOutputRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Variable Cost';
  variable2.textContent = 'Variable Costs';
  averageVariableCost = v1;
  variableCosts = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(averageVariableCostRadio.checked)
    result.textContent = `Average Variable Cost = ${computeaverageVariableCost().toFixed(2)}`;

  else if(variableCostsRadio.checked)
    result.textContent = `Variable Costs = ${computevariableCosts().toFixed(2)}`;

  else if(totalOutputRadio.checked)
    result.textContent = `Total Output = ${computetotalOutput().toFixed(2)}`;
})

// calculation

function computeaverageVariableCost() {
  return Number(variableCosts.value) / Number(totalOutput.value);
}

function computevariableCosts() {
  return Number(averageVariableCost.value) * Number(totalOutput.value);
}

function computetotalOutput() {
  return Number(variableCosts.value) / Number(averageVariableCost.value);
}