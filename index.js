const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let heroi = "Herói";

console.log("Bom dia herói, vamos ver o seu nível!\n");

rl.question("Digite a quantidade de XP do herói: ", (resposta) => {
    let XP = Number(resposta); 
    
    heroiNivel(heroi, XP);
    
    rl.close();
});

const heroiNivel = (heroi, XP) => {
    let nivelAlcancado = "";

    if (XP >= 0 && XP <= 1000) {
        nivelAlcancado = "Ferro";
    } else if (XP >= 1001 && XP <= 2000) {
        nivelAlcancado = "Bronze";
    } else if (XP >= 2001 && XP <= 5000) {
        nivelAlcancado = "Prata";
    } else if (XP >= 5001 && XP <= 7000) {
        nivelAlcancado = "Ouro";
    } else if (XP >= 7001 && XP <= 12000) {
        nivelAlcancado = "Diamante";
    } else if (XP >= 12001 && XP <= 30000) {
        nivelAlcancado = "Platina";
    } else if (XP >= 30001 && XP <= 50000) {
        nivelAlcancado = "Ascendente";
    } else if (XP >= 50001 && XP <= 100000) {
        nivelAlcancado = "Imortal";
    } else if (XP >= 100001) {
        nivelAlcancado = "Radiante";
    } else {
        nivelAlcancado = "Indefinido (XP inválido)";
    }

    console.log(`O Herói de nome ${heroi} está no nível ${nivelAlcancado} com ${XP} XP.`);
}