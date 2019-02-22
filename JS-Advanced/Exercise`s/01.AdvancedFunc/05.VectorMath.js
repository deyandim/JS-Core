(function solve(){
    let add = function([x1, y1], [x2, y2]){
        return [x1 + x2, y1 + y2];
    };
    let multiply = function([x, y], z){
        return [x * z, y * z];
    };
    let length = function([x, y]){
        let result = Math.sqrt(x*x + y*y);
        return  result;
    };
    let dot = function([x1, y1], [x2, y2]){
        return x1 * x2 + y1 * y2;
    };
    let cross = function([x1, y1], [x2, y2]){
        return x1 * y2 - x2 * y1;
    };
    
    return {add, multiply, length, dot, cross};
})();


