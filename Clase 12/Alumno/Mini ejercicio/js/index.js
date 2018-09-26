console.log('Init app')

var firstNameNode = $('#firstName')

var liNode = $('.list-group-item')

firstNameNode.blur(overwriteList)

function overwriteList (event) {
  var inputNode = $(event.target)
  var value = inputNode.val()
  liNode.html(value)
  console.log(value)
}
