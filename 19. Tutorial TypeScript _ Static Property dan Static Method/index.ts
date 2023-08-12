class User{
    name: string;
    constructor(name: string, private age: number){
        this.name = name;
    }
    setName(value: string): void{
        this.name = value;
    }
    getName(): string{
        return this.name;
    }
}

class Admin extends User{
    read: boolean = true;
    write: boolean = true;
    phone: string | number;
    private _email: string = "";
    static getRoleName: string = "Admin";

    constructor(phone: number | string, name: string, age: number){
        super(name, age);
        this.phone = phone;
    }

    static getNameRole(){
        return "hei";
    }

    getRole(): { read: boolean, write: boolean } {
        return{
            read: this.read,
            write: this.write
        }
    }

    set email(value: string){
        if(value.length < 5) this.email = "Email Salah";
        else this._email = value;
    }

    get email(): string{
        return this._email;
    }
}

// const admin = new Admin(6289669848875, "Rifuki", 20);
// console.log(admin);
// admin.email = "mahomarifuki@gmail.com";
// console.log(admin.email);

const admin = Admin.getNameRole();
console.log(admin);

console.log(Admin.getRoleName);