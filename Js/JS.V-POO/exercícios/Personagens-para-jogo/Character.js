export class Character {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attackPoints = attackPoints;
    this.defensePoints = defensePoints;
  }

  attack(target) {
    const damage = this.attackPoints - target.defensePoints;
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
