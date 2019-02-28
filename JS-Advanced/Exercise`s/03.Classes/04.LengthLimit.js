class Stringer {
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
        this.outputStr = this.innerString;

    }

    increase(lentgh){
        this.innerLength += lentgh;

        return this.innerLength;
    }

    decrease(length){
        this.innerLength -= length;

        if(this.innerLength < 0){
            this.innerLength = 0;
        }

        return this.innerLength;
    }
    toString(){
        if(this.outputStr.length <= this.innerLength){
            return this.innerString;
        }else if(this.innerLength == 0){
            return '...';
        }
        else if(this.outputStr.length > this.innerLength){
            this.outputStr = this.outputStr.substr(0, this.outputStr.length - this.innerLength);
        }
        return `${this.outputStr}...`;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

// test.increase(6);
// console.log(test.toString());

test.decrease(5);
console.log(test.toString()); //...
//
test.increase(4);
console.log(test.toString()); //Test






//
// let length = 3;
// let myString = "ABCDEFGHIJK";
// let myTruncatedString = myString.substr(0, myString.length - 3);
// console.log(myTruncatedString);