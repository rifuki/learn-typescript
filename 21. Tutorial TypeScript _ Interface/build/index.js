class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
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
