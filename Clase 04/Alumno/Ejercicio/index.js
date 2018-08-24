console.log('init app')

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

function avgResult (examResults) {
  var resultSum = 0
  for (i = 0; i < examResults.length; i++) {
    resultSum = resultSum + examResults[i]
  }
  avgResult = resultSum / examResults.length
  return avgResult
}

console.log(avgResult(examResults))
