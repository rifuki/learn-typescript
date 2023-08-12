// function as type
// let age: number = 20;
type Age = number;

let age: Age = 20;
console.log(age);

type Tambah = (
    val1: number,
    val2: number
) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}
console.log(Add(1, 2));
const Add2: Tambah = (val1:number, val2:number):number => {
    return val1 + val2;
}
console.log(Add2(2, 293));
