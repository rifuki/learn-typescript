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
  private _email: string = "";

  constructor(phone: string | number, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string){
    if(value.length < 5) this._email = "Email Salah";
    else this._email = value;
  }

  get email(): string{
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
