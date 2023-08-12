// optional parameter

const getUmur = (val1: string, val2?: string):string => {
    return val1 + " " + val2;
}

console.log(getUmur("A", "B"));
console.log(getUmur("A"));

const getUmur2 = (val1: number, val2?: number): number => {
    return val1 + val2;
}

console.log(getUmur2(1, 2));