'use strict';
class Car {
  static getSpecs(car) {
    console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);
  }
  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }
  get getPrice() {
    return this._price;
  }
  set setPrice(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    return this.speed + value < this.maxSpeed ? (this.speed += value) : (this.speed = this.maxSpeed);
  }
  decelerate(value) {
    return this.speed - value > 0 ? (this.speed -= value) : (this.speed = 0);
  }
  drive(hours) {
    return this.isOn === true ? (this.distance += hours * this.speed) : this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.getPrice); // 2000
mustang.setPrice = 4000;
console.log(mustang.getPrice); // 4000
