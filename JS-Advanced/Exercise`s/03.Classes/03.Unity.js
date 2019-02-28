class Rat {
    constructor(name){
        this.name = name;
        this.listOfRats = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat) {
            this.listOfRats.push(otherRat);
        }
    }

    getRats(){
        return this.listOfRats;
    }

    toString(){
        console.log(this.name);
        for (let rat of this.listOfRats) {
            console.log(`##${rat}`);
        }
    }
}
let test = new Rat("Dido");

test.unite('Pesho');
test.unite('Kolio');
console.log(test.getRats());
test.toString();