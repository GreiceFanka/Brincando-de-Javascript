class Spaceship {
    static get desacelerationRate(){
        return 0.15
    }
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }
    speedUp (acceleretion){
        this.currentVelocity += (acceleretion *(1 - Spaceship.desacelerationRate))
    }
}

let spaceship = new Spaceship("Apollo")
spaceship.speedUp(100)
console.log(spaceship)