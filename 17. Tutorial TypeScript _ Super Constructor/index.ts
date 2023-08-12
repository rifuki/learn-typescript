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
  phone: string | number;


  constructor(phone: string, name: string, age: number){
    super(name, age);
    this.phone = phone;
  }
  getRole(): { read: boolean; write: boolean } {
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