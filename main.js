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
    ships[index] = new Ship("defender", 90, 10, `def${ships.length}`);
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
  const shipPos = Math.floor(Math.random() * ships.length);
  getShot(ships[shipPos]);
  if (ships[shipPos].health < 1) {
    ships.splice(shipPos, 1);
  }
};

const getShot = ship => {
  ship.getShot();
  getUpdatedShipHealth();
};

const getUpdatedShipHealth = () => ships.forEach(updateHealth);

const updateHealth = ship => {
  if (ship.health > 0) {
    ship.health = ship.health;
  } else {
    ship.health = 0;
  }
  document.getElementById(ship.id).innerHTML = `HP: ${ship.health}`;
};
