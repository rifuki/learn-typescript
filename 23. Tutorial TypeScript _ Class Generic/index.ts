class List<T> {
    private data: T[];

    constructor(...element: T[]) {
        this.data = element;
        console.log(this.getAll());
    }

    add(element: T): void{
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

const numbers = new List<number>(1, 2, 3, 4);
numbers.add(0);
numbers.addMultiple(5, 6, 7, 8);
console.log(numbers.getAll());

const random = new List<number | string>(1, 2, "tiga", "empat");
random.add("lima");
random.add(6);
random.addMultiple(7, 8, 9, "sepuluh");
console.log(random.getAll());