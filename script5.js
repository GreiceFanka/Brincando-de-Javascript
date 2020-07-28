let dobra = 0
let wish = ""

let nameSpaceship = prompt("Qual o nome da Nave?")

wish = prompt("Deseja entrar na dobra espacial?\n1-Sim\n2-Não")

while(wish == "1"){
   dobra += 1
   wish = prompt("Deseja entrar na dobra novamente?\n1-Sim\n2-Não")
}
alert("O nome da Nave é: " + nameSpaceship + "\nQuantidade de dobras realizadas: " + dobra)