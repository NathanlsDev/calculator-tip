function output (percentage, total){
  if (isNaN(percentage) || percentage === Infinity && isNaN(total) || total === Infinity) {
    document.querySelector("#total1").textContent = `$0.00`;
    document.querySelector("#total2").textContent = `$0.00`;
  } else {
    document.querySelector("#total1").textContent = `$${percentage.toFixed(2)}`;
    document.querySelector("#total2").textContent = `$${total.toFixed(2)}`;
  }
}