function manageTickets(arrInput, type){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
   let listOfTickets = [];
    for (let line of arrInput){
        let arrLine = line.split('|');
        let newTicket = new Ticket(arrLine[0], Number(arrLine[1]), arrLine[2]);
        listOfTickets.push(newTicket);
        console.log(line);
    }
    return listOfTickets = listOfTickets.sort((a, b) => {
        if(a[type] > b[type]){
            return 1;
        }else if(a[type] < b[type]){
            return -1;
        }else{
            return 0;
        }
    });
}

console.log(manageTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));