const baceEffects = {
   кровотеча: "втрата здоров'я протягому певного часу. Сюди можна впихнути функцію яка буде змінювати характеристики персонажа",
   втома: "Максимальна кількість витривалості зменшується на певну кількість очків",
}

// let idUserValue = 0;

// const idUser = () => idUser += 1;

class Pers {
   constructor ({name}) {
      this.name = name;
      this.effects = [];

   }

   putEfects ({type, damage = 0, time = 1}) {
      if (time  > 1) {
         
         console.log(`${this.name} отримує пошкодження ${damage} від ${type}. Ефект діятиме ще ${time} ходів`)
         console.log(baceEffects[type]);
         
         const newEffects = { type, damage, time };
         console.log(newEffects)
         this.effects.push(newEffects)
      }
   }


}

// class Arena {
//    constructor({arena}) {
//       this.arena = arena;
//       this.member = []
//    }
// }



const valentin = new Pers({name: 'Valentin'});
// console.log(valentin);
// console.log(valentin.efects);
valentin.putEfects({type:'кровотеча', damage: 30, time: 5});
console.log(valentin.effects);

// const arenaOne = new Arena({ arena: 'FirstArena' });
// console.log(arenaOne);
// arenaOne.member.push(valentin);
// console.log(arenaOne);

// arenaOne.member[0].time = 3;

// console.log(valentin);
