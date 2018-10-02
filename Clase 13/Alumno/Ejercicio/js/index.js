console.log('Init app')

var value = $('#counter').val()

console.log(value)

$(window).keydown(function (event) {
  switch (event.which) {
    case 13:
      value = 0
      $('#counter').html('' + value + '')
      break
    case 38:
      value++
      $('#counter').html('' + value + '')
      break
    case 40:
      value--
      $('#counter').html('' + value + '')
      break
    default:
      break
  }
})
