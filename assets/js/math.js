function math (billValue, numPerson, custom) {
  let division = billValue / numPerson;
  let percentage = division * (custom/100);
  let total = division + percentage;

  output(percentage, total);
}
