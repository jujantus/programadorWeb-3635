console.log('init app')

var day = prompt('Ingrese un día de la semana')

switch (day) {
  case 'lunes':
  case 'Lunes':
  case 'martes':
  case 'Martes':
  case 'Miércoles':
  case 'miércoles':
  case 'Miercoles':
  case 'miercoles':
  case 'Jueves':
  case 'jueves':
  case 'Viernes':
  case 'viernes':
    console.log('Es día hábil')
    break
  case 'Sábado':
  case 'sábado':
  case 'Sabado':
  case 'sabado':
  case 'Domingo':
  case 'domingo':
    console.log('Es fin de semana!!')
    break
  default:
    console.log('Ingrese un día válido de lunes a domingo')
    break
}
