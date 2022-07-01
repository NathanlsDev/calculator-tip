let five = document.querySelector('#five');
let ten = document.querySelector('#ten');
let fifteen = document.querySelector('#fifteen');
let twentyFive = document.querySelector('#twentyFive');
let fifty = document.querySelector('#fifty');

if (five.addEventListener('click', ()  => {
  custom = 5;
  math(billValue, numPerson, custom);
  clean();
}));

if (ten.addEventListener('click', ()  => {
  custom = 10;
  math(billValue, numPerson, custom);
  clean();
}));

if (fifteen.addEventListener('click', ()  => {
  custom = 15;
  math(billValue, numPerson, custom);
  clean();
}));

if (twentyFive.addEventListener('click', ()  => {
  custom = 25;
  math(billValue, numPerson, custom);
  clean();
}));

if (fifty.addEventListener('click', ()  => {
  custom = 50;
  math(billValue, numPerson, custom);
  clean();
}));