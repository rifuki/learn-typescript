"use strict";
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
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
const admin = new Admin("081310774289", "Aozora Umeko", 21);
console.log(admin.getName());
admin.setName("Setsuna Rika");
console.log(admin.getName());
console.log(admin.getRole());
console.log(admin.phone);
