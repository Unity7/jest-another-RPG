const Potion = require("../lib/Potion");

function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("health"), new Potion()];
}

// Use Potion prototype
Player.prototype.usePotion = function (index) {
  const potion = this.getInventory().splice(index, 1)[0];

  switch (potion.name) {
    case "agility":
      this.agility += potion.value;
      break;
    case "health":
      this.health += potion.value;
      break;
    case "strength":
      this.strength += potion.value;
      break;
  }
};

// Add Potion prototype
Player.prototype.addPotion = function (potion) {
  this.inventory.push(potion);
};

// getAttackValue prototype
Player.prototype.getAttackValue = function () {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

// reduceHealth prototype
Player.prototype.reduceHealth = function (health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

// isAlive prototype
Player.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  }
  return true;
};

// getHealth prototype
Player.prototype.getHealth = function () {
  return `${this.name}'s health is now ${this.health}!`;
};

// getStats prototype
Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};

// getInvetory prototype
Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

module.exports = Player;
