console.log('init app')

do {
  var op = prompt('Ingrese la operación que desea realizar: Sum, Res, Mul, Div')

  switch (op) {
    case 'Sum':
    case 'sum':
      var num1 = prompt('Ingrese el primer sumando')
      var num1 = parseFloat(num1, 10)
      var num2 = prompt('Ingrese el segundo sumando')
      var num2 = parseFloat(num2, 10)
      var result = num1 + num2
      console.log('El total es: ' + result)
      break
    case 'Res':
    case 'res':
      var num1 = prompt('Ingrese el minuendo')
      var num1 = parseFloat(num1, 10)
      var num2 = prompt('Ingrese el sustraendo')
      var num2 = parseFloat(num2, 10)
      var result = num1 - num2
      console.log('El resto es: ' + result)
      break
    case 'Mul':
    case 'mul':
      var num1 = prompt('Ingrese el primer factor')
      var num1 = parseFloat(num1, 10)
      var num2 = prompt('Ingrese el segundo factor')
      var num2 = parseFloat(num2, 10)
      var result = num1 * num2
      console.log('El producto es: ' + result)
      break
    case 'Div':
    case 'div':
      div0 = false
      var num1 = prompt('Ingrese el dividendo')
      var num1 = parseFloat(num1, 10)

      do {
        if (div0) {
          console.log('0 no es un divisor válido')
        }
        var num2 = prompt('Ingrese el divisor')
        var num2 = parseFloat(num2, 10)
        div0 = true
      } while (!num2)
      var result = num1 / num2
      console.log('El cociente es: ' + result)
      break
    default:
      op = null
      console.log('Esa no es una operación válida')
      break
  }
} while (!op)
