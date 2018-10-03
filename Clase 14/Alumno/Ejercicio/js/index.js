console.log('Init app')

$(document).ready(function () {
  $('.btn').click(function () {
    $(this).parent().parent().parent().fadeOut(1000)
  })
})
