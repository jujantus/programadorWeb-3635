console.log('Init app')

var button = document.getElementById('button')

button.onclick = validateAge

function validateAge () {
  var ageNode = document.getElementById('age')

  var value = ageNode.value

  if (value >= 18) {
    console.log('Es mayor de edad y puede ingresar.')
  } else {
    console.log('Es menor de edad y no puede ingresar.')
  }
}
