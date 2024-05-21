var qg= prompt("Digite a quantidade de gol")
var qc= prompt("Digite a quantidade de passos certos")
var qe= prompt("Digite a quantidade de passos errados")

var re = (qg *50 ) + (qc * 10) - (qe * 5)
alert ( "total de pontos" + re)

if (re < 50) {
    alert("Péssima partida")
} else if (re >= 50 && re < 100) {
    alert ("Partida ruim")
} else if (re >= 100 && re < 150) {
    alert("Fez o básico")
} else if (re >= 150 && re < 200) {
    alert("Foi bem na partida")
} else 
   alert("Jogou Demais")
