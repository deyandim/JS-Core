function solve(arr, method){
    
    const ascendinSort = function(a, b){
        return  a - b;
    };
    const descendingSort = function(a, b){
        return  b - a;
    };
    let objSort =  {
        'asc': ascendinSort,
        'desc': descendingSort
    };

    return arr.sort(objSort[method]);
}