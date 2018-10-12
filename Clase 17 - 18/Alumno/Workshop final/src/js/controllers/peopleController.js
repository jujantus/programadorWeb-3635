import { getData } from '../utils/ajax'

function peopleController () {
  console.log('peopleController successfully loaded')

  var tableBodyNode = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
    } else {
      var people = data.results

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]

        var url = person.url

        url = url.replace('https://swapi.co/api/people/', '')

        var id = url.replace('/', '')

        console.log(id)

        console.log(person)

        tableBodyNode.append(
          '<tr id="' +
            id +
            '"><th scope="row">' +
            id +
            '</th><td>' +
            person.name +
            '</td><td>' +
            translate(person.gender) +
            '</td><td>' +
            translate(person.height) +
            ' CM</td><td>' +
            translate(person.mass) +
            ' KG</td> <td>' +
            translate(person.eye_color) +
            '</td> <td> <button type="button" class="btn btn-success">Guardar</button></td> </tr>'
        )
      }
      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        seeMoreButton.remove()
      }
    }
  }
}

function translate (word) {
  switch (word) {
    case 'male':
      return 'Masculino'
      break
    case 'female':
      return 'Femenino'
      break
    case 'blue':
      return 'Azul'
      break
    case 'yellow':
      return 'Amarillo'
      break
    case 'red':
      return 'Rojo'
      break
    case 'brown':
      return 'Marron'
      break
    case 'black':
      return 'Negro'
      break
    case 'orange':
      return 'Naranja'
      break
    case 'hazel':
      return 'Avellana'
      break
    case 'blue-gray':
      return 'Azul-gris'
      break
    case 'hermaphrodite':
      return 'Hermafrodita'
      break
    case 'unknown':
      return '???'
      break
    case 'white':
      return 'Blanco'
      break
    case 'dark':
      return 'Oscuro'
      break
    case 'pink':
      return 'Rosa'
      break
    case 'green, yellow':
      return 'Verde-Amarillo'
      break
    case 'gold':
      return 'Dorado'
      break
    case 'red, blue':
      return 'Rojo-Azul'
      break
    default:
      return word
  }
}

export default peopleController
