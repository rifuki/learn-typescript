interface Laptop{
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean){
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log("nyala");
    }
    off(): void{
        console.log("mati");
    }
    
}

class Macbook implements Laptop {
    name: string;
    keyboardLight: boolean;

    constructor(name: string, keyboardLight: boolean){
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log("nyala");
    }
    off(): void {
        console.log("mati");
    }
    
}

const asus = new Asus("Asus", true);
console.log(asus);
asus.on();
asus.off();

const mb = new Macbook("MBP", true);
mb.on();
mb.off();
console.log(mb);