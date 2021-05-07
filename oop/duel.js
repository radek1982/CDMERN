class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resillience) {
        super(name, cost)
        this.power = power;
        this.resillience = resillience;
    }

    attack(target) {
            if( target instanceof Unit ) {
                target.resillience-=this.power;
                console.log(`${this.name} attacked ${target.name}` );
            } else {
                throw new Error( "Target must be a unit!" );
            }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            var op = this.magnitude < 0 ? "reduce" : "incresase"
            console.log( `${op} ${target.name}'s ${this.stat} by ${Math.abs(this.magnitude)}`);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const hardAlgo = new Effect("Hard Algorithm",2, "resillience", 3);
const unhandledPromise = new Effect("Unhandled Promise Rejection", 1, "resillience", -2);
const pairProgramming = new Effect("Pair programming", 3, "power", 2);

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
hardAlgo.play(redBeltNinja);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

unhandledPromise.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

