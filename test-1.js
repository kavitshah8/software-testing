// Two different styles of doing TDD/BDD assertions
var expect = require('chai').expect;
var assert = require('chai').assert;

// Begins Test Suit
describe('Array', function(){
	
	var arr;
	var str;
	var isPrime;

	beforeEach(function(){
		arr = [1,2,3];
		str = "Kavit";
 		isPrime = function (num){
			
			if(num === 2){
				return true;
			}
			
			if(num <= 1 || num %2 === 0){
				return false;
			}

			for(i = 3; i <= Math.sqrt(num); i++){
				if(num % i === 0){
					return false;
				}
 			}

		return true;
	};
	});

	afterEach(function(){
		console.log("Done");
	});

	it('should call isPrime', function(){
		expect(isPrime(3)).to.equal(true);
		expect(isPrime(4)).to.equal(false);
	});

	it('should check for string data type', function(){
		expect(str).to.be.a('string');
	})

// Nested Test Suit
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, arr.indexOf(5));
      assert.equal(-1, arr.indexOf(0));
    })
  })
})
