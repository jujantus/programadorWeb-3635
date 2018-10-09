$(document).ready(function () {
  console.log('Init app')

  var mainListNode = $('#mainList')
  var showMoreButtonNode = $('#showMore')

  getData('https://swapi.co/api/people/', showCharacters)

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  function showCharacters (error, data) {
    if (error) {
      console.log('no se pudo')
    } else {
      console.log('los personajes son: ', data)
      var charArray = data.results
      var character
      for (i = 0; i < charArray.length; i++) {
        character = charArray[i]
        mainListNode.append(
          '<li class="list-group-item">' + character.name + '</li>'
        )
      }
      if (data.next) {
        showMoreButtonNode.one('click', function () {
          getData(data.next, showCharacters)
        })
      } else showMoreButtonNode.remove()
    }
  }
})
