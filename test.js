// Require the built in 'assertion' library
var assert = require('assert');
// Create a test suite (group) called Math
describe('Math', function() {
    // Test One: A string explanation of what we're testing
    // Test Two: A string explanation of what we're testing
    it('should test if (3-4)*8 = -8', function(){
      // Our actual test: (3-4)*8 SHOULD EQUAL -8
      assert.equal(-8, (3-4)*8);
    });
});





describe('check square',function(){
    it("should test square rot of a number",()=>{
        assert.equal(2, Math.sqrt(4))
    })
})


var num = [23,4,5,67,8]
function add(num) {
 
     num.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue
      })
  }
  
  describe('add()', function() {
    var tests = [
      {args: [1, 2],       expected: 3},
      {args: [1, 2, 3],    expected: 6},
      {args: [1, 2, 3, 4], expected: 10}
    ];
  
    tests.forEach(function(test) {
        console.log(test)
      it('correctly adds ' + test.args.length + ' args', function() {
        var res = add.apply(null, test.args);
        assert.equal(res, test.expected);
      });
    });
  });




  //async
  describe('User', function() {
    describe('#save()', function() {
      it('should save without error', function(done) {
        var user = new User('Luna');
        user.save(function(err) {
          if (err) done(err);
          else done();
        });
      });
    });
  });