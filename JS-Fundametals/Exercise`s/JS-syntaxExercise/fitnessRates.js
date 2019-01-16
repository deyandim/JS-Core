function solve(dayOfWeeek, service, hour){
    let price;
    
    if(hour >= 8.00 && hour < 15.00){
        switch(dayOfWeeek){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thurstday":
            case "Friday": 
            switch(service){
                case "Fitness": price = 5.00;break;
                case "Sauna": price = 4.00;break;
                case "Instructor": price = 10.00;break;
            };break;
            case "Saturday":
            case "Sunday": 
            switch(service){
                case "Fitness": price = 8.00;break;
                case "Sauna": price = 7.00;break;
                case "Instructor": price = 15.00;break;
            };break;
        }
    }
    else if(hour >= 15.00 && hour <= 22.00){
        switch(dayOfWeeek){
            case "Monday": 
            case "Tuesday": 
            case "Wednesday":
            case "Thurstday":
            case "Friday": 
            switch(service){
                case "Fitness": price = 7.50;break;
                case "Sauna": price = 6.50;break;
                case "Instructor": price = 12.50;break;
            };break;
            case "Saturday":
            case "Sunday": 
            switch(service){
                case "Fitness": price = 8.00;break;
                case "Sauna": price = 7.00;break;
                case "Instructor": price = 15.00;break;
            };break;
        }
    }
    return price;
}

console.log(solve('Sunday', 'Fitness', 22.00));
