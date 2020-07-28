let spaceship = prompt("Qual nome da nave")
let newSpaceship = ""

for( let i = spaceship.length - 1; i >= 0;i--){
    if(spaceship[i] == "e"){
        break
    }
    newSpaceship += spaceship[i]
} 
alert("Nome original da Nave: " + spaceship + "\nNome após ocultação: " + newSpaceship)