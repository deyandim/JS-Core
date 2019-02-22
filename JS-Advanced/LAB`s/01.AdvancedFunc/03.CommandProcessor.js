function solve(arr) {
    function process(){
    let inputString = '';
        return {
            append: (str) => {
                inputString += str;
            },
            removeStart: (removePart) => {
                inputString = inputString.substring(removePart);
            },
            removeEnd: (removePart) => {
                inputString = inputString.substring(0, inputString.length - removePart);
            },
            print: () => console.log(inputString)

        };
    }
    let closure = process();

    for (let item of arr) {
        let[comm, value] = item.split(' ');
        closure[comm](value);
        
    }
    
    // console.log(closure);
    
}
solve(['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print'])
