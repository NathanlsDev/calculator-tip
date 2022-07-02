window.addEventListener('load', start);

function start () {
  let header = document.createElement('header');
  document.body.appendChild(header);
  header.classList.add('title');

  let h1 = document.createElement('h1');
  header.appendChild(h1);
  h1.textContent = `Spli`;

  let span = document.createElement('span');
  h1.appendChild(span);
  span.textContent= `tter`;

  let main = document.createElement('main');
  document.body.appendChild(main);
  main.classList.add('container');


  //left side
  let sectionLeft = document.createElement('section');
  main.appendChild(sectionLeft);
  sectionLeft.classList.add('container__left');

  let sectionInsercText = document.createElement('section');
  sectionLeft.appendChild(sectionInsercText);
  sectionInsercText.classList.add('insertion__text');

  let h3Bill = document.createElement('h3');
  sectionInsercText.appendChild(h3Bill);
  h3Bill.textContent = `Bill`;

  let divInsercValues = document.createElement('div');
  sectionInsercText.appendChild(divInsercValues);
  divInsercValues.classList.add('insertion__values');

  let spanIcon1 = document.createElement('span');
  divInsercValues.appendChild(spanIcon1);
  spanIcon1.classList.add('material-icons');
  spanIcon1.textContent = `attach_money`;

  let inputBill = document.createElement('input');
  divInsercValues.appendChild(inputBill);
  inputBill.setAttribute('type', 'number');
  inputBill.setAttribute('name', 'Bill');
  inputBill.setAttribute('id', 'bill');
  inputBill.setAttribute('aria-label', 'insert the value of your bill');
  inputBill.setAttribute('placeholder', '0');

  let sectionSelect = document.createElement('section');
  sectionLeft.appendChild(sectionSelect);
  sectionSelect.classList.add('select');

  let h3Select = document.createElement('h3');
  sectionSelect.appendChild(h3Select);
  h3Select.textContent = `Select Tip %`;

  let divBtn = document.createElement('div');
  sectionSelect.appendChild(divBtn);
  divBtn.classList.add('select__btn');

  let button5 = document.createElement('button');
  divBtn.appendChild(button5);
  button5.classList.add('select__percentage', 'btn');
  button5.setAttribute('id','five');
  button5.textContent = `5%`;
  
  let button10 = document.createElement('button');
  divBtn.appendChild(button10);
  button10.classList.add('select__percentage', 'btn');
  button10.setAttribute('id','ten');
  button10.textContent = `10%`;
  
  let button15 = document.createElement('button');
  divBtn.appendChild(button15);
  button15.classList.add('select__percentage', 'btn');
  button15.setAttribute('id','fifteen');
  button15.textContent = `15%`;
  
  let button25 = document.createElement('button');
  divBtn.appendChild(button25);
  button25.classList.add('select__percentage', 'btn');
  button25.setAttribute('id','twentyFive');
  button25.textContent = `25%`;
  
  let button50 = document.createElement('button');
  divBtn.appendChild(button50);
  button50.classList.add('select__percentage', 'btn');
  button50.setAttribute('id','five');
  button50.textContent = `50%`;

  let inputCustom = document.createElement('input');
  divBtn.appendChild(inputCustom);
  inputCustom.classList.add('select__custom', 'select__percentage');
  inputCustom.setAttribute('type', 'number');
  inputCustom.setAttribute('name', 'customValue');
  inputCustom.setAttribute('id', 'customValue');
  inputCustom.setAttribute('aria-label', 'Insert a custom percentage');
  inputCustom.setAttribute('placeholder', 'Custom');

  let sectionPerson = document.createElement('section');
  sectionLeft.appendChild(sectionPerson);
  sectionPerson.classList.add('persons');

  let divPersonTxt = document.createElement('div');
  sectionPerson.appendChild(divPersonTxt);
  divPersonTxt.classList.add('persons__text');

  let h3People = document.createElement('h3');
  divPersonTxt.appendChild(h3People);
  h3People.textContent = `Number of People`;

  let pPerson = document.createElement('p');
  divPersonTxt.appendChild(pPerson);
  pPerson.setAttribute('id', 'txt');

  let divValues2 = document.createElement('div');
  sectionPerson.appendChild(divValues2);
  divValues2.classList.add('insertion__values');
  divValues2.setAttribute('id', 'error');

  let spanIcon2 = document.createElement('span');
  divValues2.appendChild(spanIcon2);
  spanIcon2.classList.add('material-icons');
  spanIcon2.textContent = `person`;

  let inputPerson = document.createElement('input');
  divValues2.appendChild(inputPerson);
  inputPerson.setAttribute('type', 'number');
  inputPerson.setAttribute('name', 'numPerson');
  inputPerson.setAttribute('id', 'numPerson');
  inputPerson.setAttribute('aria-label', 'insert the number of persons');
  inputPerson.setAttribute('placeholder', '0');
  

  //right side
  let sectionRight = document.createElement('aside');
  main.appendChild(sectionRight);
  sectionRight.classList.add('container__right');

  let sectionAmount = document.createElement('section');
  sectionRight.appendChild(sectionAmount);
  sectionAmount.classList.add('amount');

  let divAmount = document.createElement('div');
  sectionAmount.appendChild(divAmount);
  divAmount.classList.add('amount__text');

  let pAmount = document.createElement('p');
  divAmount.appendChild(pAmount);
  pAmount.textContent = `Tip Amount`;

  let pErson = document.createElement('p');
  divAmount.appendChild(pErson);
  pErson.textContent = `/ person`;

  let divOutput = document.createElement('div');
  sectionAmount.appendChild(divOutput);
  divOutput.classList.add('output');
  divOutput.setAttribute('id', 'total1');
  divOutput.textContent = `$0.00`;

  let sectionTotal = document.createElement('section');
  sectionRight.appendChild(sectionTotal);
  sectionTotal.classList.add('total');

  let divAmText = document.createElement('div');
  sectionTotal.appendChild(divAmText);
  divAmText.classList.add('amount__text');

  let pTotal = document.createElement('p');
  divAmText.appendChild(pTotal);
  pTotal.textContent = `Total`;

  let pTotal2 = document.createElement('p');
  divAmText.appendChild(pTotal2);
  pTotal2.textContent = `/ person`;

  let divTotal = document.createElement('div');
  sectionTotal.appendChild(divTotal);
  divTotal.classList.add('output');
  divTotal.setAttribute('id', 'total2');
  divTotal.textContent = `$0.00`;

  let buttonReset = document.createElement('button');
  sectionRight.appendChild(buttonReset);
  buttonReset.classList.add('reset__btn');
  buttonReset.setAttribute('id','reset');
  buttonReset.setAttribute('name','reset');
  buttonReset.setAttribute('aria-label','Clean information');
  buttonReset.textContent = `reset`;

  let getInput = document.createElement('script');
  document.body.appendChild(getInput);
  getInput.setAttribute('src', 'assets/js/getInputValue.js');

  let validationInput = document.createElement('script');
  document.body.appendChild(validationInput);
  validationInput.setAttribute('src', 'assets/js/validationInput.js');

  let getBtnValue = document.createElement('script');
  document.body.appendChild(getBtnValue);
  getBtnValue.setAttribute('src', 'assets/js/getBtnValue.js');

  let math = document.createElement('script');
  document.body.appendChild(math);
  math.setAttribute('src', 'assets/js/math.js');

  let scriptOutput = document.createElement('script');
  document.body.appendChild(scriptOutput);
  scriptOutput.setAttribute('src', 'assets/js/output.js');

  let reset = document.createElement('script');
  document.body.appendChild(reset);
  reset.setAttribute('src', 'assets/js/reset.js');
}