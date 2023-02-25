class Pers {
   constructor ({name}) {
      this.name = name;
      this.effects = [];

   }

   putEfects ({type, damage = 0, time = 1}) {
      if (time  > 1) {
         console.log(`${this.name} отримує пошкодження ${damage} від ${type}. Ефект діятиме ще ${time} ходів`)
         const newEffects = {type, damage, time};
         console.log(newEffects)
         this.effects.push(newEffects)
      }
   }


}

class Arena {
   constructor({arena}) {
      this.arena = arena;
      this.member = []
   }
}



const valentin = new Pers({name: 'Valentin'});
console.log(valentin);
console.log(valentin.efects);
valentin.putEfects({type:'кровотеча', damage: 30, time: 5});
console.log(valentin.effects);