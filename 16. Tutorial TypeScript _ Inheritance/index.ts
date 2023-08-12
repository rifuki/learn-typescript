// public = bisa di akses di semua class / dari luar class.
// protected = hanya bisa di akses dari luar class tersebut, dan kelas turunannya.
// private = hanya bisa di akses dari class itu sendiri.

class User {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }
}

class Admin extends User {
    read: boolean = true;
    write: boolean = true;

    // getRule(): {read: boolean, write: boolean}{
        getRule(): object{
        return {
            read: this.read,
            write: this.write
        }
    }
}

const admin = new Admin("Ao", 10);
admin.setName("Rifuki");
admin.read = false;
console.log(admin.getName());
console.log(admin.getRule());
console.log(admin);

