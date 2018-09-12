console.log('Init app')

var emailNode = document.getElementById('email')

emailNode.onblur = validateEmail

function validateEmail (event) {
  var inputNode = event.target

  var value = inputNode.value

  var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (emailValidation.test(value)) {
    console.log('El Email es válido.')
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  } else {
    console.log('No es un Email válido, por favor vuelva a ingresarlo.')
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }
}
