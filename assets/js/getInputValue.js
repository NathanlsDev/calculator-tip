let bill = document.querySelector('#bill');
let quantity = document.querySelector('#numPerson');
let customValue = document.querySelector('#customValue');

bill.addEventListener('input', getInputValue);
quantity.addEventListener('input', getInputValue);
customValue.addEventListener('input', getInputValue);

function getInputValue () {
  billValue = Number(bill.value);
  console.log(billValue);

  numPerson = Number(quantity.value);
  console.log(numPerson);
  
  custom = Number(customValue.value);
  console.log(custom);

  validation(numPerson);
  math(billValue, numPerson, custom);
}