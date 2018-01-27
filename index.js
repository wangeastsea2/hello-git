var add = require('./calc.js').add
var today = require('./date.js').today
var x = 0
var y = 0
var z = add(x, y)
var d = today()
console.log(d)
console.log('x + y ='+ z )
