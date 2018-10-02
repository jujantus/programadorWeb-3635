console.log('Init app')

$('.fa-trash-alt').on('click', function () {
  console.log('click')
  $(this).parent().remove()
})
