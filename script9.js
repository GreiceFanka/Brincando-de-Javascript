let spaceship = prompt("Qual o nome da Nave ")
let spaceshipVelocity = 0

let chosen

function menu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que deseja fazer\n" + "1- Acelerar a nave em 5km/s\n" +
        "2- Desacelerar a nave em 5km/s\n" +
        "3- Imprimir dados de bordo\n" +
        "4- Sair de programa")

    }
    return option
}

function speedUp (velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown (velocity){
    let newVelocity = velocity - 5
    if (newVelocity < 0){
        newVelocity = 0
    }
    return newVelocity
}

function onboardData(name, velocity){
    alert("Nome da Nave: " + name + "\nVelocidade: " + velocity + "km-s")
}

do {
    chosen = menu()
        switch(chosen){
            case "1":
                spaceshipVelocity = speedUp(spaceshipVelocity)
                break
            case "2":
                spaceshipVelocity = slowDown(spaceshipVelocity)
                break
            case "3":
                onboardData(spaceship, spaceshipVelocity)
                break
            default :
                alert("Encerrando programa de bordo!")
        }
    
} while(chosen != "4")
