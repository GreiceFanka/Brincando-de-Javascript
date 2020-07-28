let nave = {
    velocidadeInicial:0,
    velocidade:function (acelerar) {
        this.velocidadeInicial += acelerar
    }
}

function registrarNave() {
    nave.nome = prompt("Informe o nome da nave")
    nave.tipo = prompt("Informe o tipo da nave")
    nave.velocidadeMax= Number(prompt("Informe a velocidade mãxima da nave (km/s)"))
}

function aceleracao() {
    let acelerar = Number(prompt("Quanto você quer acelerar? (km/s)"))
    nave.velocidade(acelerar)
    if(nave.velocidadeInicial > nave.velocidadeMax) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + nave.velocidadeInicial + "km/s" + 
                "\nVelocidade máxima da Nave: " + nave.velocidadeMax + "km/s")
    }
}

function parar(){
    alert("Nome: " + nave.nome + "\nTipo: " + nave.tipo + "\nVelocidade da Nave: " + nave.velocidadeInicial + "\nVelocidade máxima da nave: " + nave.velocidadeMax)
    nave.velocidadeInicial = 0
}

function menu() {
    let escolha
    do {
        escolha = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(escolha) {
            case "1":
                aceleracao()
                break
            case "2":
                parar()
                break
            default:
                alert("Opação inválida")
        }
    } while(escolha != "2")
}

registrarNave()
menu()
