console.log('Init app')

// Globales

var LOCAL_KEY = 'studentList'

// Carga inicial

var studentsList = getLocalList(LOCAL_KEY)

console.log(studentsList)

var mainListNode = document.getElementById('mainList')

var student

for (var i = 0; i < studentsList.length; i++) {
  student = createStudentNode(studentsList[i])

  mainListNode.appendChild(student)
}

// Validar los campos nombre, apellido, email y dni

var firstNameNode = document.getElementById('firstName')

firstNameNode.onblur = validateRequiredField

var dniNode = document.getElementById('dni')

dniNode.onblur = validateDniField

var lastNameNode = document.getElementById('lastName')

var emailNode = document.getElementById('email')

emailNode.onblur = validateEmail

// Agregar el estudiante

var addStudentButtonNode = document.getElementById('addStudentButton')

addStudentButtonNode.onclick = addStudent

// Eliminar estudiante

var deleteDniNode = document.getElementById('deleteDni')

deleteDniNode.oninput = validateDeleteDniField

var deleteStudentButtonNode = document.getElementById('deleteStudentButton')

deleteStudentButtonNode.onclick = deleteStudent

function validateDeleteDniField (event) {
  var inputNode = event.target

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (index > -1) {
    // Habilitamos el botón
    deleteStudentButtonNode.disabled = false
  } else {
    // Deshabilitar el botón
    deleteStudentButtonNode.disabled = true
  }
}

function deleteStudent () {
  var deleteDniValue = deleteDniNode.value

  var index = searchStudentIndexByDni(deleteDniValue, studentsList)

  // Elimino en la fuente de verdad
  studentsList.splice(index, 1)

  // Piso la lista del localStorage
  setLocalList(LOCAL_KEY, studentsList)

  // Busco en el dom el nodo y lo elimino de la lista
  var node = document.getElementById(deleteDniValue)

  mainListNode.removeChild(node)

  deleteDniNode.value = ''
  deleteStudentButtonNode.disabled = true

  console.log(studentsList)
}

function addStudent () {
  var firstNameValue = firstNameNode.value
  var dniValue = dniNode.value
  var lastNameValue = lastNameNode.value
  var emailValue = emailNode.value

  var student = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    dni: dniValue,
    email: emailValue
  }

  studentsList.push(student)

  setLocalList(LOCAL_KEY, studentsList)

  var studentNode = createStudentNode(student)

  mainListNode.appendChild(studentNode)

  firstNameNode.value = ''
  dniNode.value = ''
  lastNameNode.value = ''
  emailNode.value = ''
  addStudentButtonNode.disabled = true
  firstName.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')
  emailNode.classList.remove('is-valid')

  console.log(studentsList)
}

// BUSCAR ALUMNO

var searchStudentFieldNode = document.getElementById('searchText')

var searchStudentButtonNode = document.getElementById('searchStudentButton')

// Funciones auxiliares

function searchStudentIndexByDni (dni, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }

  return -1
}

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (isNaN(parsedValue) || parsedValue <= 0 || index > -1) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateSubmitButton()
}

function validateRequiredField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateSubmitButton()
}

function validateSubmitButton () {
  var addStudentButtonNode = document.getElementById('addStudentButton')
  var inputFields = document.getElementsByClassName('is-valid')

  if (inputFields.length === 3) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.firstName +
    ' ' +
    newStudent.lastName +
    '</h1>' +
    '<h3>DNI:' +
    newStudent.dni +
    '</h3><p class="pepe">E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

// Buscar estudiante con coincidencias parciales

function searchStudentIndexByText (text, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (
      includesText(text, student.firstName) ||
      includesText(text, student.lastName)
    ) {
      return i
    }
  }

  return -1
}

function includesText (text, baseText) {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

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
  validateSubmitButton()
}
