class Character {
  constructor(health, level) {
    this.health = health;
    this.level = level;
  }
  attack(target) {
    target.health -= 10;
  }
}
class Warrior extends Character {
  constructor(health, level) {
    super(health, level);
  }
  attack(target) {
    super.attack(target);
    target.health -= 10;
  }
}
class Mage extends Character {
  constructor(health, level) {
    super(health, level);
  }
  attack(target) {
    super.attack(target);
    target.health -= 5;
  }
}
