console.log('Init app')

var emailInputNode = $('#email')

emailInputNode.blur(validateEmail)

function validateEmail (event) {
  var inputNode = $(this)

  var value = inputNode.val()

  var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (emailValidation.test(value)) {
    console.log('El Email es válido.')
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  } else {
    console.log('No es un Email válido, por favor vuelva a ingresarlo.')
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
  }
}
