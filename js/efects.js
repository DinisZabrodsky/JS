// 1 - Створити героя
// 2 - Створити масив прототип із ефектами
// 3 - лічільник ходів

const Hero = {
    // Кількість здоровя
    health: 10,
    maxHealth: 110,

    // Вілновлення здоровя за хід
    healthRepair: 13,
    mana: 10,
    maxMana: 125,
    manaRepair: 7,
    energy: 10,
    maxEnergy: 100,
    energyRepair: 15,
    characteristics: {
        power: 47,
        protection: 34,
        attack: 44,
        powerOfMagic: 47,
        luck: 3,
    },

    regeneration() {
        // Функція котра доповнює шкалу здоровя, мати, енергії(витривалості) на значення яке прописане у відновлені (healthRepair,
        //     manaRepair та energyRepair). Виклик функіції відбувається при завершенні ходу

        this.health + this.healthRepair <= this.maxHealth ? this.health += this.healthRepair : this.health = this.maxHealth;
        console.log("🚀 ~ file: efects.js:15 ~ regeneration ~ this.health", this.health)

        this.mana + this.manaRepair <= this.maxMana ? this.mana += this.manaRepair : this.mana = this.maxMana;
        console.log("🚀 ~ file: efects.js:18 ~ regeneration ~ this.mana", this.mana)

        this.energy + this.energyRepair <= this.maxEnergy ? this.energy += this.energyRepair : this.energy = this.maxEnergy;
        console.log("🚀 ~ file: efects.js:21 ~ regeneration ~ this.energy", this.energy)

    },
}

// Лічільник ходів, лежить у глобальній області видимості, адже до його будуть звертатись безліч функцій
let course = 5;

// Завершення ходу
const nextCourse = document.querySelector('.efects-button-move').addEventListener('click', () => {
    console.log(course);
    course += 1;
    Hero.regeneration();
});


// Клас котрий буде приймати ефекти від заклять, поранень, станів і тп
class Use {
    constructor({ rootSelector, nCourse = 0, value1 = 0, value2 = 0, mana = 0, damage = 0, baff = 0, deBaff = 0, name1 = undefined, name2 = undefined }) {
        // const { rootSelector, nCourse = 0, value1 = 0, value2 = 0, mana = 0, damage = 0, baff = 0, deBaff = 0, name1 = undefined, name2 = undefined } = bace;
        this.rootSelector = rootSelector;
        this.nCourse = nCourse;
        this.value1 = value1;
        this.value2 = value2;
        this.mana = mana;
        this.damage = damage;
        this.baff = baff;
        this.deBaff = deBaff;
        this.name1 = name1;
        this.name2 = name2;

        this.useEfect();
        this.getRefs(rootSelector);
    }

    getRefs(rootSelector) {
        document.querySelector(rootSelector)
            .addEventListener('click', () => {
                this.nCourse += course;
                this.useEfect();
            });

    }

    useEfect() {
        if (this.nCourse >= course) {

            console.log(`це працює {this.bace}`)
            //     Hero.[this.name1] += this.value1;
            //     if (this.name2 !== undefined) {
            //         Hero.[this.name2] += this.value2;
            //     }
        }
    }
}

const efectOne = new Use({
    rootSelector: '.efects-button-1',
    name1: 'health',
    value1: 50,
})

console.log(efectOne);