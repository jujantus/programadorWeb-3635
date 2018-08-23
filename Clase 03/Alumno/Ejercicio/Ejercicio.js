console.log('init app')

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var dayCounter = 0; dayCounter < daysOfTheWeek.length; dayCounter++) {
  var day = daysOfTheWeek[dayCounter]
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
      console.log(day + ' es día hábil')
      break
    case 'Sábado':
    case 'sábado':
    case 'Sabado':
    case 'sabado':
    case 'Domingo':
    case 'domingo':
      console.log(day + ' es fin de semana!!')
      break
    default:
      console.log(day + ' no es un día válido')
      break
  }
}
