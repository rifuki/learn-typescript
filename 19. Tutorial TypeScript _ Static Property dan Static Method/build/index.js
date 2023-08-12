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
    static getNameRole() {
        return "hei";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    set email(value) {
        if (value.length < 5)
            this.email = "Email Salah";
        else
            this._email = value;
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
// const admin = new Admin(6289669848875, "Rifuki", 20);
// console.log(admin);
// admin.email = "mahomarifuki@gmail.com";
// console.log(admin.email);
const admin = Admin.getNameRole();
console.log(admin);
console.log(Admin.getRoleName);
