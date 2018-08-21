console.log('init app')

var gender = prompt('Ingrese su género (masculino, femenino u otro)')

switch (gender) {
  case 'masculino':
  case 'Masculino':
    var genderAns = 'Sr. '
    break
  case 'femenino':
  case 'Femenino':
    var genderAns = 'Sra. '
    break
  case 'otro':
  case 'Otro':
    var genderAns = 'Sx.'
    break
  default:
    break
}
if (genderAns) {
  var age = prompt('Ingrese su edad')
  age = parseInt(age, 10)

  if (age) {
    if (age >= 18) {
      var ageAns = 'Usted es mayor de edad y puede ingresar'
    } else {
      var ageAns = 'Usted es menor de edad y no puede ingresar'
    }
    console.log(genderAns + ageAns)
  } else {
    console.log('Por favor presione F5 y vuelva a ingresar su genero y su edad')
  }
} else {
  console.log('Por favor presione F5 y vuelva a ingresar su genero')
}
