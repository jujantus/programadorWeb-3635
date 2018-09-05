console.log('Init app')

/* Funcion recibe como parametro un texto y un array de alumnos
busca texto en nombre o apellido de alumnos, devuelve la posicion. 
Si no existe devuelve -1 */

function studentSearch (text, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (text === student.firstName || text === student.lastName) {
      return i
    }
  }

  return -1
}

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var name
var result

name = prompt('Por favor ingrese el nombre o apellido del estudiante')
result = studentSearch(name, studentsList)

if (result !== -1) {
  console.log(
    'El estudiante ' +
      name +
      ' fue hallado en la posición ' +
      result +
      ' de la lista.'
  )
} else {
  console.log(
    'No existe un estudiante de nombre o apellido ' + name + ' en la lista.'
  )
}
