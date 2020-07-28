let nomePiloto = prompt("Qual é seu nome piloto?");
let velocidade = 0 ;
let acelerar = prompt("Qual velocidade você gostaria de acelerar a nave?");
let confirmar = confirm("Você está indo para a velocidade " + acelerar + "km/s");
if(confirmar){velocidade = acelerar}
if(velocidade <= 0){
    alert("Nave está parada!Considere partir e aumentar a velocidade.")
} else if(velocidade >= 40 && velocidade <= 80){
    alert("Parece uma boa velocidade para manter")
} else if (velocidade < 40 ){
    alert("Você está devagar podemos aumentar mais.")
} else if(velocidade >= 80 && velocidade < 100){
    alert("Velocidade alta! Considere diminuir.")
} else {
    alert("Velocidade perigosa!Controle automático forçado.")
}
alert ("Nome do piloto: "+ nomePiloto + "\nvelocidade:"+velocidade + "km/s");