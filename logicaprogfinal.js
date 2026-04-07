class heroIdea {
    constructor(nameHero, ageHero, typeHero) {
        this.nameHero = nameHero;
        this.ageHero = parseInt(ageHero);
        this.typeHero = typeHero;

        let validTypes = ["Guerreiro", "Mago", "Monge", "Ninja", "Rei"]
            if (!validTypes.includes(typeHero)) {
                throw new Error("Tipo de herói inválido. Os tipos válidos são: Guerreiro, Mago, Monge, Ninja, Rei.");
            }
            else if (ageHero < 0) {
                throw new Error("A idade do herói deve ser um número positivo.");               
            }
        let attackTypes = {
            "Guerreiro": "Espada",
            "Mago": "Feitiço",
            "Monge": "Punhos",
            "Ninja": "Shuriken",
            "Rei": "Cetro"
        }
        this.attackType = attackTypes[typeHero];
    }
}

let heroi = new heroIdea("Kanye", 35, "Mago");
console.log(`O seu herói ${heroi.nameHero}, da classe ${heroi.typeHero}, desferiu um ataque com ${heroi.attackType}!`);