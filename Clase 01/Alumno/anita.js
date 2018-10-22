var sabor = prompt('te gusta el helado?')

var pedo = document.getElementById('lista')

if ((sabor = 'Sí')) {
  pedo.html('bien ahi')
} else {
  pedo.innerHTML('sos un forro')
}
