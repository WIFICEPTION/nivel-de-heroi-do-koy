let prompt = require('prompt-sync')();

let qtWins = prompt("Insira o número de vitórias que possui: ")
let winsParse = parseInt(qtWins)
let qtLosses = prompt("Insira o número de derrotas que possui: ")
let lossesParse = parseInt(qtLosses)

let ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Mestre", "Lendário", "Grão-Mestre"]

if ((isNaN(winsParse)) || (isNaN(lossesParse))) {
    console.log("Por favor, insira apenas números")
    return  
}

function winRatio(winsParses, lossesParse) {
    let ratio = winsParses - lossesParse
    return ratio
}

let ratio = winRatio(winsParse, lossesParse)
console.log("O seu W/R é: " + ratio)

if (ratio < 0){
    console.log("Você não iniciou sua carreira ainda!")
} else {
    // Array com os limites máximos de cada rank correspondente
    let limites = [10, 20, 30, 40, 50, 60, 70, 80]
    
    let i = 0
    let rankEncontrado = ranks[8] // Padrão será o último rank (Grão-Mestre) caso passe de 80
    
    while (i < limites.length) {
        if (ratio <= limites[i]) {
            rankEncontrado = ranks[i]
            break // Sai do loop assim que encontrar o rank correto
        }
        i++
    }
    
    console.log("Você é um jogador: " + rankEncontrado)
}
