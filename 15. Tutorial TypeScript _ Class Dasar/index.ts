// class

// class User {
//     public name: string;

//     constructor(name: string){
//         this.name = name;
//     }
// }

// let user = new User("Aozora");
// console.log(user.name);

class User{
    constructor(public name: string, public age?: number){
    }
}

const user = new User("Umeko", 20);
console.log(user);