var add = require("../calc.js").add;
var expect = require('chai').expect;
describe('加法表达式的测试',function(){
  it('0 + 0 = 0', function() {
   expect(add(0, 0)).to.be.equal(0) 		
  });
  it('0 + 1 = 1', function() {
   expect(add(0, 1)).to.be.equal(1)
  });
  it('0 - 1 = -1', function() {
   expect(add(0, -1)).to.be.equal(-1)
  }) 	
});
