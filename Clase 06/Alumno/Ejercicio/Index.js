console.log('Init app')

function deleteElement (index, array) {
  if (index >= 0) {
    if (Array.isArray(array)) {
      var newArray = array.slice()
      newArray.splice(index, 1)
      return newArray
    } else console.log('Por favor pase un array como segundo argumento')
  } else console.log('Por favor ingrese un indice valido como primer argumento')
}

var numbers = [ 1, 2, 3, 4, 5 ]
console.log(numbers)
var index = prompt('Ingrese el elemento que quiere eliminar')

var result = deleteElement(index, numbers)
console.log(result)
