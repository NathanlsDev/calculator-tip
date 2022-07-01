function math (billValue, numPerson, custom) {
  let division = billValue / numPerson;
  console.log(division);

  let percentage = division * (custom/100);
  console.log(percentage);

  let total = division + percentage;
  console.log(total);

  output(percentage, total);
}
