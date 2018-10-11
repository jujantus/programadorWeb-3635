$(document).ready(function () {
  console.log('Init app')

  var nameInputNode = $('#firstName')
  var emailInputNode = $('#email')
  var commentsInputNode = $('#comments')
  var submitButtonNode = $('#submitButton')

  nameInputNode.one('blur', validateRequiredField)

  function validateRequiredField (event) {
    var requiredField = $(this)

    requiredField.next().remove()

    if (requiredField.val()) {
      requiredField.addClass('is-valid')
      requiredField.removeClass('is-invalid')
    } else {
      requiredField.addClass('is-invalid')
      requiredField.removeClass('is-valid')
      requiredField
        .parent()
        .append('<div class="invalid-feedback">El campo es requerido</div>')
    }

    if (event.type === 'blur') {
      requiredField.on('input', validateRequiredField)
    }
  }

  function validateEmail (event) {
    var emailField = $(this)

    var errorMessage = ''

    emailField.next().remove()

    if (!emailField.val()) {
      errorMessage += 'El campo es requerido'
    } else if (emailField.indexOf('.') === -1) {
      errorMessage += 'El campo debe contener punto (.).'
    } else if (emailField.indexOf('@') === -1) {
      errorMessage += 'El campo debe contener arroba (@).'
    }

    if (errorMessage) {
      emailField.addClass('is-invalid')
      emailField.removeClass('is-valid')
      emailField
        .parent()
        .append('<div class="invalid-feedback">' + errorMessage + '</div>')
    } else {
      emailField.removeClass('is-invalid')
      emailField.addClass('is-valid')
    }

    if (event.type === 'blur') {
      emailField.on('input', validateEmail)
    }

    validateSubmitButton()
  }

  function validateSubmitButton () {
    var validInputNodes = $('.is-valid')

    if (validInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }
})
