const assert = require('chai').assert;

function solve(arr, start, end){
    if(!(Array.isArray(arr))){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end >= arr.length){
        end = arr.length - 1;
    }   
    return arr.slice(start, end + 1).reduce((sum, el) => sum += Number(el), 0);
}

describe('solve', function(){
    it('should arr is Array', function(){
        //  Arrange
        let arr = [1, 2, 3, 4];
        let start = 1;
        let end = 3;
        //  Act
        let result = solve(arr, start, end);
        //  Assert
        assert.equal(result, 9);
    });
});