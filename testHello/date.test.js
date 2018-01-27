var today = require('../date.js').today
var expect = require('chai').expect
describe('今天的日期', function () {
  it('today is 2018-01-27', function () {
    expect(today()).to.be.equal('2018-01-27')
  })
})
