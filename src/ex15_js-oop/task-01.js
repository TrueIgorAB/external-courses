function Sweet(name) {
  this.name = name;
}

Sweet.prototype.getWeight = function getWeight() {
  return this.weight;
};

Sweet.prototype.getPrice = function getPrice() {
  return this.price;
};

Sweet.prototype.getMainComponent = function getMainComponent() {
  return this.mainComponent;
};
Sweet.prototype.getName = function getName() {
  return this.name;
};
function Chocolate(name) {
  Sweet.call(this, name);
  this.mainComponent = 'Cacao';
  this.weight = 100;
}

function MilkChocolate(name) {
  Chocolate.call(this, name);
  this.price = 100;
}

function DarkChocolate(name) {
  Chocolate.call(this, name);
  this.price = 160;
}

function Candy(name, mainComponent) {
  Sweet.call(this, name);
  this.mainComponent = mainComponent;
}

function SmallCandy(name, mainComponent) {
  Candy.call(this, name, mainComponent);
  this.weight = 10;
  this.price = 5;
}

function MediumCandy(name, mainComponent) {
  Candy.call(this, name, mainComponent);
  this.weight = 20;
  this.price = 10;
}

function LargeCandy(name, mainComponent) {
  Candy.call(this, name, mainComponent);
  this.weight = 40;
  this.price = 15;
}

function Pie(name) {
  Sweet.call(this, name);
  this.weight = 500;
}

function RaspberryPie(name) {
  Pie.call(this, name);
  this.price = 600;
  this.mainComponent = 'Cherry';
}

function ApplePie(name) {
  Pie.call(this, name);
  this.price = 200;
  this.mainComponent = 'Apple';
}

function Gift(sweets) {
  this.sweets = sweets;
}

Gift.prototype.getWeight = function getWeight() {
  return this.sweets.reduce(
    (accumulator, current) => accumulator + current.getWeight(),
    0,
  );
};

Gift.prototype.getSweetByName = function getSweetByName(name) {
  return this.sweets.find((sweet) => sweet.getName() === name);
};

Gift.prototype.getSortedByPrice = function getSortedByPrice() {
  return [...this.sweets].sort((a, b) => a.getPrice() - b.getPrice());
};

Object.setPrototypeOf(Chocolate.prototype, Sweet.prototype);
Object.setPrototypeOf(MilkChocolate.prototype, Chocolate.prototype);
Object.setPrototypeOf(DarkChocolate.prototype, Chocolate.prototype);

Object.setPrototypeOf(Candy.prototype, Sweet.prototype);
Object.setPrototypeOf(SmallCandy.prototype, Candy.prototype);
Object.setPrototypeOf(MediumCandy.prototype, Candy.prototype);
Object.setPrototypeOf(LargeCandy.prototype, Candy.prototype);

Object.setPrototypeOf(Pie.prototype, Sweet.prototype);
Object.setPrototypeOf(RaspberryPie.prototype, Pie.prototype);
Object.setPrototypeOf(ApplePie.prototype, Pie.prototype);

const sweets = [
  new ApplePie('My first pie'),
  new MediumCandy('Marmalade', 'marmalade'),
  new MilkChocolate('Alpen'),
  new DarkChocolate('Babaevski'),
];

const gift = new Gift(sweets);

console.log(gift);
