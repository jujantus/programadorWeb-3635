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

  var errorMessage = 'El campo debe contener '

  emailField.next().remove()

  if (
    emailField.indexOf('@') === -1 ||
    emailField.indexOf('.') === -1 ||
    !emailField.val()
  ) {
    emailField.addClass('is-invalid')
    emailField.removeClass('is-valid')
  }
}
