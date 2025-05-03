import { Character } from './Character.js';

export class Mage extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints);
    this.magicPoints = magicPoints;
  }
  attack(target) {
    const damage = this.magicPoints + this.attackPoints - target.defensePoints;
    if (damage > 0) {
      target.lifePoints -= damage;
      console.log(`${this.name} causou ${damage} de dano.`);
    } else {
      console.log('Nenhum dano causado');
    }

    if (target.lifePoints <= 0) {
      console.log(`${target.name} foi de berço, F.`);
    }
  }

  healLife(target) {
    const heal = 2 * this.magicPoints;
    if (heal >= 0) {
      target.lifePoints += heal;
    }
  }
}
