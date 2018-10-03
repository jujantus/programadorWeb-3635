console.log('Init app')

$('button').click(function () {
  var id = $(this).parent().parent().attr('id')

  console.log(id)

  removeElementWithAnimation(id)
})

function removeElementWithAnimation (id) {
  $('#' + id).fadeOut(700)
}
