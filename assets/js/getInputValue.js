let bill = document.querySelector('#bill');
let quantity = document.querySelector('#numPerson');
let customValue = document.querySelector('#customValue');

bill.addEventListener('input', getInputValue);
quantity.addEventListener('input', getInputValue);
customValue.addEventListener('input', getInputValue);

function getInputValue () {
  billValue = Number(bill.value);  
  numPerson = Number(quantity.value);  
  custom = Number(customValue.value);
  
  validation(numPerson);
  math(billValue, numPerson, custom);
}