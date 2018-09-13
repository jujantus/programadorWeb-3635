console.log('init app')

var sample = prompt('Ingrese el fragmento que desea buscar.')

var text = prompt('Ingrese el texto en el que desea buscar.')

function includesText (sample, text) {
  if (typeof sample === 'string' && typeof text === 'string') {
    var upperSample = sample.toUpperCase()
    var upperText = text.toUpperCase()

    var indexOfText = upperText.indexOf(upperSample)

    if (indexOfText !== -1) {
      return true
    } else {
      return false
    }
  }
}

console.log(includesText(sample, text))
