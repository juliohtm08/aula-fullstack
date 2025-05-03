import { Character } from './Character.js';

export class Warrior extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints) {
    super(name, lifePoints, attackPoints, defensePoints);
    this.shieldPoints = shieldPoints;
    this.stance = 'attack';
  }

  attack(target) {
    if (this.stance === 'attack') {
      super.attack(target);
    }
  }

  switchStance() {
    if (this.stance === 'attack') {
      this.stance = 'defense';
      this.defensePoints += this.shieldPoints;
    } else {
      this.stance = 'attack';
      this.defensePoints -= this.shieldPoints;
    }
  }
}
