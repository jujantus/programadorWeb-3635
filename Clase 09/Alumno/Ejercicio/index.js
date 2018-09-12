console.log('Init app')

var firstNameNode = document.getElementById('firstName')

firstNameNode.onblur = validateFirstName

function validateFirstName (event) {
  var inputNode = event.target

  var value = inputNode.value

  if (value) {
    console.log('Su nombre es ' + value + '.')
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  } else {
    console.log('Por favor ingrese su nombre.')
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }
}
