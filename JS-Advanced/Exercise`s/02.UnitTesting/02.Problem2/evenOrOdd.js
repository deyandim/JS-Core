let assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

describe('isOddOrEven', function(){
   it('The result should be string', function(){
      let str = 2;
      assert.equal(isOddOrEven(str), undefined);
   });

   it('Expected result should be string', function(){
      let str = [1,2];

      assert.equal(isOddOrEven(str), undefined);
   });
});
describe('isOddOrEven', function(){
   it('With even length should return even', function(){
      let str = 'bike';
      assert.equal(isOddOrEven(str), 'even');
   });
});
describe('isOddOrEven', function(){
    it('With odd length should return odd', function(){
        let str = 'biker';
        assert.equal(isOddOrEven(str), 'odd');
    });
});