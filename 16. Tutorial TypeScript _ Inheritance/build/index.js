"use strict";
// public = bisa di akses di semua class / dari luar class.
// protected = hanya bisa di akses dari luar class tersebut, dan kelas turunannya.
// private = hanya bisa di akses dari class itu sendiri.
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    // getRule(): {read: boolean, write: boolean}{
    getRule() {
        return {
            read: this.read,
            write: this.write
        };
    }
}
const admin = new Admin("Ao", 10);
admin.setName("Rifuki");
admin.read = false;
console.log(admin.getName());
console.log(admin.getRule());
console.log(admin);
