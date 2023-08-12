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
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        if (value.length < 5)
            this._email = "Email Salah";
        else
            this._email = value;
    }
    get email() {
        return this._email;
    }
}
const admin = new Admin(6281310774289, "Rifuki", 20);
console.log(admin.getName());
admin.setName("Aozora Umeko");
console.log(admin.getName());
console.log(admin.getRole());
admin.email = "jfjf";
// admin.email = "mahomarifuki@gmail.com";
console.log(admin.email);
