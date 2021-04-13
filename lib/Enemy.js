const Potion = require("./Potion");
const Character = require("./Character");

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
    this.potion = new Potion();
  }
  //Get the enemy's description method by displaying the name and weapon -METHOD
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

module.exports = Enemy;
