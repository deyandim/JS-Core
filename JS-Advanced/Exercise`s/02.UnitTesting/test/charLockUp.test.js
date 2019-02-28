// let lookupChar = require('../charLockUp');
// let assert = require('chai').assert;
// let expect = require('chai').expect;
//
// describe('lookupChar', function(){
//     // check string
//     it('should return undefined, if first input is not a string', function(){
//         let str = 2;
//         let index = 1;
//
//         assert.equal(lookupChar(str, index), undefined);
//     });
//
//     it('should return undefined, if first input is not a string', function(){
//         let str = undefined;
//         let index = 1;
//
//         assert.equal(lookupChar(str, index), undefined);
//     });
//
//     // check index
//     it('should return undefined, if second input is not a number', function () {
//         let str = 'developer';
//         let index = undefined;
//
//         assert.equal(lookupChar(str, index), undefined);
//     });
//     it('should return undefined, if second input is not a number', function () {
//         let str = 'developer';
//         let index = 'web';
//
//         assert.equal(lookupChar(str, index), undefined);
//     });
//     it('should return undefined, if second input is not a number', function () {
//         let str = 'developer';
//         let index = 2.5;
//
//         assert.equal(lookupChar(str, index), undefined);
//     });
//
//
// //    check range of index
//     it('should return "Incorrect index", if index is bigger than string length', function () {
//         let str = 'developer';
//         let index = 9;
//
//         assert.equal(lookupChar(str, index), 'Incorrect index')
//     });
//     it('should return "Incorrect index", if index is less than zero', function () {
//         let str = 'developer';
//         let index = -1;
//
//         assert.equal(lookupChar(str, index), 'Incorrect index')
//     });
//     it('should return undefined, if first input is not a string', function(){
//         let str = '';
//         let index = 1;
//
//         assert.equal(lookupChar(str, index), 'Incorrect index');
//     });
//
// //  check correct result
//     it('should return the correct result', function () {
//         let str = 'developer';
//         let index = 2;
//
//         let result = str[index];
//
//         assert.equal(lookupChar(str, index), result);
//     });
// });