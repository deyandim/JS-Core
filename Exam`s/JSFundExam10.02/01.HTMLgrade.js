function solve(examPoints, homeworkComplete, totalHomework){
    let maxPoints = 100;
    let bonusPoints = 0;
    let grade = 0;
    bonusPoints = homeworkComplete / totalHomework * 10;
    if(examPoints === 400){
         grade = 6;
         return grade.toFixed(2);
    }else{
       let totalPoints = examPoints / 400 * 90 + bonusPoints;

        
        grade  = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);
        if(grade < 3){
            grade = 2;
        }else if(grade > 6){
            grade = 6;
        }
        return grade.toFixed(2);
    }
  
    
}
console.log(solve(280, 10, 10));
