const hitchedSpaceships = [["Fenix",8 , true],["Golias",10 ,true],["Helmet",5 , false],["Elemental",3 ,true],["Darwin",15 ,false]]

let moreThan9 = hitchedSpaceships.filter(spaceship =>{
    return spaceship[1] > 9
}).map(spaceship =>{
    return spaceship[0]
})


let onGoing = hitchedSpaceships.findIndex(spaceship =>{
    return spaceship[2] == false
})

let upCase = hitchedSpaceships.map(spaceship =>{
    return spaceship[0].toUpperCase()
})


let message = "Espaçonaves com mais de nove tripulantes: " + moreThan9.join(", ")
message += "\nPlataforma com processo de engate: " + (onGoing + 1)
message += "\nEspaçonaves destacadas: " + upCase.join(", ")

alert(message)