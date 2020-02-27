class Ship {
  constructor(name, health, shotDamage) {
    this.name = name;
    this.health = health;
    this.shotDamage = shotDamage;
  }

  getShipCard() {
    return "<div>" + this.name + "<p>" + "HP: "  + this.health + "</p>" + "</div>";
  }

  getShot() {
    this.health = this.health - this.shotDamage;
    console.log("HP: " + this.health);
  }
}

let ships = [];

const createShip = () => {
  ships[0] = new Ship("mothership", 100, 9);
  for (let index = 1; index < 6; index++) {
    ships[index] = new Ship("defender", 80, 10);
  }
  for (let index = 6; index < 14; index++) {
    ships[index] = new Ship("striker", 45, 12);
  }
  return ships;
};

createShip();

const printShip = ship => {
  document.getElementById(ship.name).innerHTML += ship.getShipCard();
};

const getShipCard = () => {
  ships.forEach(printShip);
};

getShipCard();

