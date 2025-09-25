class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items = [];
    }

    getHealth(){
        return this.#health;
    }

    getName(){
        console.log(this.name);
    }
    getAttack(){
        console.log(this.attack);
    }

    getStats(){
        console.log("\n");
        console.log("name: " + this.name);
        console.log("health: " + this.#health);
        console.log("attack: " +this.attack)
    }

    addItem(item){
        this.items.push(item);
    }

    totalAttack(){
        return this.attack +this.items.reduce((sum,i)=>sum + i.bonusAttack,0);
    }
}

class Warrior extends Hero{

    useAbility(){
        console.log(`${this.name} uses power Strike`);
    }
}

class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} casts Fireball!`);
    }
}