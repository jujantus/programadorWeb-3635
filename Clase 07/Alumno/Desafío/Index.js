console.log('Init app')

var key = prompt('Ingrese la key del contenido que desea cargar.')

function getLocalList (key) {
  if (typeof key === 'string') {
    var list = localStorage.getItem(key)
    if (list) {
      var parsedList = JSON.parse(list)
      if (Array.isArray(parsedList)) {
        console.log('El objeto es de tipo array y contiene : ' + parsedList)
      } else {
        console.log(
          'El objeto es de tipo ' +
            typeof parsedList +
            ' y contiene : ' +
            parsedList
        )
      }
      return parsedList
    } else {
      var nothingFound = []
      console.log('No había ningún elemento bajo la key ' + key)
      return nothingFound
    }
  } else {
    var key = prompt('Ingrese la key del contenido que desea cargar.')
    getLocalList(key)
  }
}

var result = getLocalList(key)
console.log(result)
