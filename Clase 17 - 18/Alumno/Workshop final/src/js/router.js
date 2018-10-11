import crossroads from 'crossroads'

crossroads.addRoute('/', function () {
  $('#root').load('./partials/home.html', function () {
    console.log('Se cargo la home')
  })
})

crossroads.addRoute('#/people', function () {
  $('#root').load('./partials/people.html', function () {
    console.log('Se cargo la sección people')
  })
})
crossroads.addRoute('#/local-storage', function () {
  $('#root').load('./partials/local-storage.html', function () {
    console.log('Se cargo la sección LS')
  })
})
crossroads.addRoute('#/contact', function () {
  $('#root').load('./partials/contact.html', function () {
    console.log('Se cargo la sección contact')
  })
})
// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)
