"use strict";
class Vehicle {
    start() {
        console.log("brummmm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Bike extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
const car = new Car();
console.log(car.wheels);
car.start();
console.log(new Bike().wheels = 2);
console.log(new Bike().start());
