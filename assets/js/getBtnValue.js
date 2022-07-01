let five = document.querySelector('#five');
let ten = document.querySelector('#ten');
let fifteen = document.querySelector('#fifteen');
let twentyFive = document.querySelector('#twentyFive');
let fifty = document.querySelector('#fifty');

if (five.addEventListener('click', ()  => {
  custom = 5;
  console.log(custom);
  math(billValue, numPerson, custom);
  clean();
}));

if (ten.addEventListener('click', ()  => {
  custom = 10;
  console.log(custom);
  math(billValue, numPerson, custom);
  clean();
}));

if (fifteen.addEventListener('click', ()  => {
  custom = 15;
  console.log(custom);
  math(billValue, numPerson, custom);
  clean();
}));

if (twentyFive.addEventListener('click', ()  => {
  custom = 25;
  console.log(custom);
  math(billValue, numPerson, custom);
  clean();
}));

if (fifty.addEventListener('click', ()  => {
  custom = 50;
  console.log(custom);
  math(billValue, numPerson, custom);
  clean();
}));