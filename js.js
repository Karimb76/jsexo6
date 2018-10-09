submit.addEventListener('click', function(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var result = firstNumber % secondNumber;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Vous n'avez pas entré des chiffres");
  }
  else {
    alert("Le reste de la division est : " + result);
  }
}
)
