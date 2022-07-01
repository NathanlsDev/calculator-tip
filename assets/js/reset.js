let erase = document.querySelector('#reset');
erase.addEventListener('click', () =>{
  let bill = document.querySelector('#bill');
  let person = document.querySelector('#numPerson');
  let amountP = document.querySelector("#total1");
  let totalP = document.querySelector("#total2");

  bill.value = '';
  person.value = '';
  amountP.textContent = `$0.00`;
  totalP.textContent = `$0.00`;
  clean()
});

function clean (){
  let cleanner = document.querySelector('#customValue');
  cleanner.value = '';
}

