class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isWorking = false;
  }

  turnOn() {
    this.isWorking = true;
  }

  turnOff() {
    this.isWorking = false;
  }

  getName() {
    return this.name;
  }

  getUsedPower() {
    return this.isWorking ? this.power : 0;
  }
}

class WaterDevice extends Device {
  constructor(name, power, maxCapacity) {
    super(name, power);
    this.maxCapacity = maxCapacity;
  }

  boilWater() {
    console.log(`Boiling ${this.maxCapacity} water`);
  }
}

class CoffeeMachine extends WaterDevice {
  turnOn() {
    super.turnOn();
    this.boilWater();
    console.log('Making Coffee!');
  }
}

class Kettle extends WaterDevice {
  turnOn() {
    super.turnOn();
    this.boilWater();
  }
}

class MediaDevice extends Device {
  constructor(name, power, maxVolume) {
    super(name, power);
    this.maxVolume = maxVolume;
  }

  turnOnSound() {
    console.log(`Sound is on! ${this.maxVolume}`);
  }
}

class TV extends MediaDevice {
  turnOn() {
    super.turnOn();
    this.turnOnSound();
    console.log('Screen is on!');
  }
}

class MusicColumn extends MediaDevice {
  turnOn() {
    super.turnOn();
    this.turnOnSound();
  }
}

class Refrigerator extends Device {
  turnOn() {
    super.turnOn();
    console.log('Freezing');
  }
}

class Room {
  constructor(devices) {
    this.devices = devices;
  }

  getDeviceByName(name) {
    return this.devices.find((device) => device.getName() === name);
  }

  turnOnByName(name) {
    const device = this.getDeviceByName(name);
    if (device) {
      device.turnOn();
    }
  }

  getPower() {
    return this.devices.reduce(
      (accumulator, current) => accumulator + current.getUsedPower(),
      0,
    );
  }
}

const devices = [
  new Refrigerator('Refrigerator2000', 100),
  new Kettle('ket', 20, 2),
  new MusicColumn('Alice', 50, 100),
  new TV('LG', 1000, 100),
  new CoffeeMachine('Redmond', 20, 0.5),
];
const room = new Room(devices);
console.log(room.getPower());
room.turnOnByName('Alice');
console.log(room.getPower());
room.turnOnByName('ket');
console.log(room.getPower());
console.log(room.getDeviceByName('Refrigerator2000'));
