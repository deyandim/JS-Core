function solve(matrix, command){
    let header = matrix.shift();
    let commandType = command.split(' ')[0];
    let commandBy = command.split(' ')[1];
    let index = header.indexOf(commandBy);
    let output =[];
    if(commandType == 'hide'){
        header.splice(index, 1);
        console.log(header.join(' | '));
        
    for (let line of matrix) {       
            line.splice(index, 1);
          console.log(line.join(' | '));         
        }       
    }else if(commandType === 'sort'){
        console.log(header.join(' | '));
        matrix.sort((a,b)=>{
            if (a[index] < b[index]) {
                return -1;
              }
              if (a[index] > b[index]) {
                return 1;
              }
              // a must be equal to b
              return 0;
            
        });
        for (const line of matrix) {
            console.log(line.join(' | '));
            
        }
        
    }else if(command.split(' ')[2]){
        let commandElem = command.split(' ')[2];
        console.log(header.join(' | '));    
        for (const line of matrix) {
            if(line[index] === commandElem){
                console.log(line.join(' | '));
                
            }
        }
    }
    
 
 
    
    
    
    

}

solve([['name', 'age', 'grade'],
['Peter', '25', '5.00'],
['George', '34', '6.00'],
['Marry', '28', '5.49']],
'sort name');


