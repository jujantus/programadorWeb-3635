console.log('Init app')

var key = prompt('Ingrese el nombre de la key')

var testList = [ 'CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS' ]

function setLocalList (key, array) {
  if (key) {
    if (Array.isArray(array)) {
      var stringyArray = JSON.stringify(array)
      localStorage.setItem(key, stringyArray)
    }
  } else
    do {
      var key = prompt('Ingrese el nombre de la key')
    } while (!key)
}

setLocalList(key, testList)
