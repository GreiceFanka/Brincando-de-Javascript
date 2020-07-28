let distancia = prompt("Qual a distância em anos luz?")
let opcoes = prompt("Qual operação deseja realizar?" + "\nOpção 1:Parsec(pc)"+"\nOpção 2:Unidade astronômica(au)"+ "\nOpção 3:Quilômetros(km)")
let unidade
let conversao
switch(opcoes){
    case "1":
        unidade = "Parsec"
        conversao = distancia * 0.306601
        break
    case "2":
        unidade = "Unidade Astronômica"
        conversao = distancia * 63241.1
        break
    case "3":
        unidade = "Quilômetros"
        conversao = distancia * 9.5 * Math.pow(10, 12)
        break
    default:
        unidade = "Unidade não identificada"
        conversao = "Conversão fora do escopo."
}

alert("Distância em anos luz :" + distancia + "\nDistância convertida:\n" + unidade +": "+ conversao)