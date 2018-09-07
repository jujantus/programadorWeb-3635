console.log('Init app.')

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode (student) {
  var studentNodeLi = document.createElement('li')
  studentNodeLi.className = 'list-group-item'
  studentNodeLi.id = student.dni
  studentNodeLi.innerHTML =
    '<h1>' +
    student.firstName +
    ' ' +
    student.lastName +
    '</h1> <h3>DNI: ' +
    student.dni +
    '</h3> <p>Email: ' +
    student.email +
    '</p>'
  return studentNodeLi
}

var studentNode = createStudentNode(student)
console.log(studentNode)
