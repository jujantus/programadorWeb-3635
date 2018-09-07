console.log('Init app')

var texts = [ 'Ed', 'Edd', 'Eddy', 'Tablón' ]

var listNode = document.getElementById('mainList')

var nameNode

for (var i = 0; i < texts.length; i++) {
  nameNode = texts[i]
  var nameNodeLi = document.createElement('li')
  nameNodeLi.innerHTML = nameNode
  nameNodeLi.className = 'list-group-item'
  listNode.appendChild(nameNodeLi)
}
