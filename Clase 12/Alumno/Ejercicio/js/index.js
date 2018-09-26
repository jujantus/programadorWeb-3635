console.log('Init app')

var squareNode = $('.square')
var cross = true
var counter = 0

squareNode.click(insertClass)

function insertClass () {
  var squareClass = $(this)

  if (!squareClass.hasClass('circle') && !squareClass.hasClass('cross')) {
    if (cross) {
      squareClass.toggleClass('cross')
      cross = !cross
      counter = counter + 1
    } else {
      squareClass.toggleClass('circle')
      cross = !cross
      counter = counter + 1
    }
  }
  if (counter === 9) {
    setTimeout(() => {
      squareNode.removeClass('circle')
      squareNode.removeClass('cross')
      counter = 0
    }, 3000)
  }
}
