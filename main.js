class Ship {
  constructor(name, health, shotDamage, id) {
    this.name = name;
    this.health = health;
    this.shotDamage = shotDamage;
    this.id = id;
  }

  getShot() {
    return (this.health = this.health - this.shotDamage);
  }

  getShipCard() {
    return `<div>${this.name}<p id='${this.id}'>HP: ${this.health}</p></div>`;
  }
}

let ships = [];

const createShip = () => {
  ships[0] = new Ship("mothership", 100, 9, `mtr${ships.length}`);
  for (let index = 1; index < 6; index++) {
    ships[index] = new Ship("defender", 80, 10, `def${ships.length}`);
  }
  for (let index = 6; index < 14; index++) {
    ships[index] = new Ship("striker", 45, 12, `str${ships.length}`);
  }
  return ships;
};

createShip();

const printShip = ship => (document.getElementById(ship.name).innerHTML += ship.getShipCard());

const getShipCard = () => ships.forEach(printShip);

getShipCard();

const chooseShipToFireAt = () => Math.floor(Math.random() * ships.length);

const shootShip = () => {
  getShot(ships[chooseShipToFireAt()]);
  document.getElementById(name);
};

const getShot = ship => {
  ship.getShot();
  getUpdatedShipHealth();
};

const getUpdatedShipHealth = () => ships.forEach(updateHealth);

const updateHealth = ship => {
  document.getElementById(ship.id).innerHTML = `HP: ${ship.health}`;
};
