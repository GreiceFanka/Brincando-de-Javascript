class Nave{
    constructor(nome, quantidade){
        this.nome = nome
        this.quantidade = quantidade
        this.engatada = false
        this.portasAbertas = false
    }
    engate(){
        this.engatada = true
        this.portasAbertas = true
    }
}


function Menu (){
    let opcoes
    while(opcoes != "1" && opcoes !="2" && opcoes !="3"){
        opcoes = prompt( "O que deseja fazer?\n" +
        "1- Engatar nave\n" +
        "2- Imprimir naves\n" +
        "3- Sair do programa")
    }
    return opcoes
}

function criarNave(){
    let nomeNave = prompt("Informe o nome da Nave")
    let quantidade = prompt("Informe a quantidade de tripulantes")
    let nave = new Nave(nomeNave,quantidade)
    return nave
}

function imprimirNomeNave (naves){
    let lista = ""
    naves.forEach((nave,index) => {
        lista += (index + 1) + "- " + nave.nome + 
        " (" + nave.quantidade + " tripulantes)\n"
    })
    alert(lista)
}


let navesEngatadas = []
let opcoes 

while(opcoes != "3"){
    opcoes = Menu()
    switch(opcoes){
        case "1":
            let addNave = criarNave()
            addNave.engate()
            navesEngatadas.push(addNave)
            break
        case "2":
            imprimirNomeNave(navesEngatadas)
            break
    }
}