console.log('Init app')

/* 
object public properties : model, brand, year
object private properties: id (random and automatically generated)
object methods: getCarName () -> returns a string with "model, brand, year"
*/

function Car (model, brand, year) {
  this.model = model
  this.brand = brand
  this.year = year
  var id = Math.random()
  this.getCarName = function () {
    message =
      'La marca del auto es ' +
      brand +
      ', el modelo es ' +
      model +
      ' y es del año ' +
      year +
      '.'
    return message
  }
}

newcar1 = new Car('Suran', 'Volkswagen', 2015)
newcar2 = new Car('Audi TT', 'Audi', 2017)
newcar3 = new Car('Gran turismo', 'Maserati', 2018)

console.log(newcar1.getCarName())
console.log(newcar2.getCarName())
console.log(newcar3.getCarName())
