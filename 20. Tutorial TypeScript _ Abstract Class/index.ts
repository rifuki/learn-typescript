abstract class Vehicle{
    abstract wheels: number;
    start(): void{
        console.log("brummmm");
    }
}

class Car extends Vehicle{
    wheels: number = 4;
}

class Bike extends Vehicle{
    wheels: number = 2;
}

const car = new Car();
console.log(car.wheels);
car.start();

console.log(new Bike().wheels = 2);
console.log(new Bike().start());