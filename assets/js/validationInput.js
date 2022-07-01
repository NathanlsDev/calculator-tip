function validation (){
  if(numPerson == 0 || numPerson == " "){
    let errorP = document.querySelector('#error');
    errorP.classList.add("error");
    let errorT = document.querySelector('#txt');
    errorT.classList.add("error__txt");
    errorT.textContent = `can't be zero`;
    
  } else {
    if (!numPerson == 0 || !numPerson == " "){
      let errorP = document.querySelector('#error');
      errorP.classList.remove("error");
      let errorT = document.querySelector('#txt');
      errorT.classList.remove("error__txt");
      errorT.textContent = '';
    }
  }
}