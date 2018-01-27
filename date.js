function today () {
  var d = new Date(Date.now())
  return d.toISOString().slice(0, 10)
}

module.exports.today = today
