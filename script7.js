let nomeNave = prompt("Qual o nome da espaçonave?")
let caractere = prompt("Qual caractere deseja substituir?")
let substituir = prompt("Por qual caractere deseja substituir?")
let novaNave = ""

for(let i=0;i< nomeNave.length;i++){
    if(nomeNave[i] == caractere){
        novaNave += substituir
    } else {
        novaNave += nomeNave[i]
    }
}
alert ("O nome da nave é " + novaNave)
