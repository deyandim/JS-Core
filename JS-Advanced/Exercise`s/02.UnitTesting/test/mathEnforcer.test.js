let mathEnforcer = require('../mathEnforcer');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('mathEnforcer', function(){
    describe('addFive', function() {
        it('should return undefined, if the input is not a number', function () {
            let inputNum = 'string';

            assert.equal(mathEnforcer.addFive(inputNum), undefined);
        });
        it('should return result, if the input is a number', function () {
            let inputNum = 5;

            assert.equal(mathEnforcer.addFive(inputNum), 10);
        });
        it('should return result, if the input is a number', function () {
            let inputNum = -10;

            assert.equal(mathEnforcer.addFive(inputNum), -5);
        });
        it('should return result, if the input is a number', function () {
            let inputNum = 5.5;

            expect(mathEnforcer.addFive(inputNum)).to.be.closeTo(10.5, 0.1);
        });
    });

    describe('substractTen', function() {
        it('should return undefined, if the input is not a number', function () {
            let inputNum = 'string';

            assert.equal(mathEnforcer.subtractTen(inputNum), undefined);
        });
        it('should return result, if the input is a number', function () {
            let inputNum = 10;

            assert.equal(mathEnforcer.subtractTen(inputNum), 0);
        });
        it('should return result, if the input is a number', function () {
            let inputNum = -5;

            assert.equal(mathEnforcer.subtractTen(inputNum), -15);
        });
        it('should return result, if the input is a number', function () {
            let inputNum = 10.1;

            expect(mathEnforcer.subtractTen(inputNum)).to.be.closeTo(0.1, 0.1);
        });
        it('should return result, if the input is a number', function () {
            let inputNum = 15.3;

            expect(mathEnforcer.subtractTen(inputNum)).to.be.closeTo(5.3, 0.1);
        });
    });

    describe('sum', function() {
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 'string';
            let inputNum2 = 'string';

            assert.equal(mathEnforcer.sum(inputNum1, inputNum2), undefined);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 1;
            let inputNum2 = 'string';

            assert.equal(mathEnforcer.sum(inputNum1, inputNum2), undefined);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 'string';
            let inputNum2 = 1;

            assert.equal(mathEnforcer.sum(inputNum1, inputNum2), undefined);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 5;
            let inputNum2 = 5;

            assert.equal(mathEnforcer.sum(inputNum1, inputNum2), 10);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = -5;
            let inputNum2 = 5;

            assert.equal(mathEnforcer.sum(inputNum1, inputNum2), 0);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 5.25;
            let inputNum2 = 5.20;

            assert.equal(mathEnforcer.sum(inputNum1, inputNum2), 10.45);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 5.5;
            let inputNum2 = 5;

            expect(mathEnforcer.sum(inputNum1, inputNum2)).to.be.closeTo(10.5, 0.1);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 5;
            let inputNum2 = 5.5;

            expect(mathEnforcer.sum(inputNum1, inputNum2)).to.be.closeTo(10.5, 0.1);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 5.2;
            let inputNum2 = 5.3;

            expect(mathEnforcer.sum(inputNum1, inputNum2)).to.be.closeTo(10.5, 0.1);
        });
        it('should return undefined, if the input is not a number', function () {
            let inputNum1 = 0;
            let inputNum2 = -10.3;

            expect(mathEnforcer.sum(inputNum1, inputNum2)).to.be.closeTo(-10.3, 0.1);
        });
    });


});