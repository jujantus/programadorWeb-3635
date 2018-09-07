console.log('Init app')

var titleNode = document.getElementById('title')
var textNode = document.getElementById('text')

setTimeout(function () {
  titleNode.innerHTML = prompt('Ingresá el nuevo título.')

  textNode.innerHTML = prompt('Ingresá el nuevo texto.')
}, 2000)
