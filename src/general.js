class Human {

    
    
    constructor(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._stamina = 10;
    }

    set age(newAge) {
        this._age = newAge;
    }

    get age() {
      return this._age + " years";
    }

    static sayHi(){
        console.log("sayHi");
    }
    walk() {
        if(this._stamina >= 2) {
            console.log(this._name + " walked");
            this._stamina -= 2;
        } else {
            this.consumeEnergyDrink();
            this.walk();
        }
    }

    talk() {
        if(this._stamina >= 4) {
            console.log(this._name + " talked");
            this._stamina -= 4;
        } else {
            this.consumeEnergyDrink();
            this.talk();
        } 
    }

    consumeEnergyDrink() {
        this._stamina += 5;
        console.log(this._name + " regained stamina!");
    }
}

const sathya = new Human("sathya", 70, "male");
const hemanth = new Human("Hemanth", 29, "male");
Human.sayHi();
const someAge = sathya.age; //getter
sathya.age = 45; //setter
allSettled = async () => {
    const promises = [ fetch('https://jsonplaceholder.typicode.com/todos/1'), fetch('https://does-not-exist/') ];
        
    const results = await Promise.allSettled(promises);
    console.log(results);
    const errors = results
      .filter(p => p.status === 'rejected')
      .map(p => p.reason);
}
this.allSettled();




function a(){
    class Human {
    
        constructor(name, age, gender) {
            this._name = name;
            this._age = age;
            this._gender = gender;
            this._stamina = 10;
        }
    
        set age(newAge) {
            this._age = newAge;
        }
    
        get age() {
          return this._age + " years";
        }
    
        static sayHi(){
            console.log("sayHi");
        }
        walk() {
            if(this._stamina >= 2) {
                console.log(this._name + " walked");
                this._stamina -= 2;
            } else {
                this.consumeEnergyDrink();
                this.walk();
            }
        }
    
        talk() {
            if(this._stamina >= 4) {
                console.log(this._name + " talked");
                this._stamina -= 4;
            } else {
                this.consumeEnergyDrink();
                this.talk();
            } 
        }
    
        consumeEnergyDrink() {
            this._stamina += 5;
            console.log(this._name + " regained stamina!");
        }
    }
    
    const sathya = new Human("sathya", 70, "male");
    const hemanth = new Human("Hemanth", 29, "male");
    Human.sayHi();
    const someAge = sathya.age; //getter
    sathya.age = 45; //setter
    allSettled = async () => {
        const promises = [ fetch('https://jsonplaceholder.typicode.com/todos/1'), fetch('https://does-not-exist/') ];
            
        const results = await Promise.allSettled(promises);
        console.log(results);
        const errors = results
          .filter(p => p.status === 'rejected')
          .map(p => p.reason);
    }
    this.allSettled();
    var r=require("jquery");
}
