console.log('Init app')

// ALTA

// Pedir datos iniciales del local storage

var LOCAL_KEY = 'studentList'

var studentListNode = getLocalList(LOCAL_KEY)

//Ingresa nombre y lo valida

//Ingresa DNI y lo valida (busca si existe)

//Habilita boton

//On button push envia nombre y DNI, lo agrega al DOM y al local storage

//eliminar estudiante

var deleteDniNode = document.getElementById('deleteDni')
deleteDniNode.oninput = validateDeleteDniField
