function diminuirVelocidade(velocidade, imprimir){
    let baixarVelocidade = 20
    while(velocidade > 0){
    imprimir(velocidade)
    velocidade -= baixarVelocidade
    }
    alert("Nave parada, as portas podem ser abertas.")
}

let velocidadeInicial = 150

diminuirVelocidade(velocidadeInicial, function(velocidade){
    console.log("Velocidade atual: " + velocidade)
})