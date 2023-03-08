const button = document.querySelector('.button-container');
button.addEventListener('click', onClickButton);

function onClickButton(event) {
   if (event.target.nodeName !== 'BUTTON') {
      return;
   };

   const base = {
      type: event.target.dataset.type,
      damage: event.target.dataset.damage,
      time: event.target.dataset.time,
      id: 'id000001',
   }

   applyEffect(base);
};

function applyEffect({type, damage, time, id}) {
   console.log(type, damage, time, id);

   const typeFunction = baceEffects[type]
   typeFunction({ damage, time, id });

   console.log(heroOnArena[id]);
}
  


const baceEffects = {
   
   bleeding: function ({ damage, id }) {
      console.log(`Персонаж отримує пошкодження здоров'я в кількості ${damage} очків здоров'я`);
      heroOnArena[id].health -= damage; 
   },
   help: function ({ damage, id }) {
      console.log(`Персонаж підвищує рівень здоров'я на ${damage}`);
      heroOnArena[id].health += Number(damage); 
   },
   fire: function ({ damage, time, id }) {
      console.log(`Персонаж отримує пошкодження в ${damage} хітів від горіння`);
      heroOnArena[id].health -= damage; 
   },
}

const heroOnArena = {
   id000001: {
      health: 70,
      maxHealth: 110,
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
   },
   id000002: {
      health: 70,
      maxHealth: 110,
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
   },
   id000003: {
      health: 70,
      maxHealth: 110,
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
   },
};