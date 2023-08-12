"use strict";
class List {
    constructor(...element) {
        this.data = element;
        console.log(this.getAll());
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
const numbers = new List(1, 2, 3, 4);
numbers.add(0);
numbers.addMultiple(5, 6, 7, 8);
console.log(numbers.getAll());
const random = new List(1, 2, "tiga", "empat");
random.add("lima");
random.add(6);
random.addMultiple(7, 8, 9, "sepuluh");
console.log(random.getAll());
