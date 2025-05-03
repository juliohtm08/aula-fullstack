import { Character } from './Character.js';

export class Thief extends Character {
  attack(target) {
    const damage = 2 * (this.attackPoints - target.defensePoints);
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
}
