import Asus from "./Asus";
import MacBook from "./MacBook";

const asus = new Asus("Zenbook", true, true);
console.log(asus);
asus.a();
asus.b();

const macbook = new MacBook(2017, false, false);
console.log(macbook);
macbook.c();