// function default parameter

const fullName = (first: string, last: string = "Umeko"): string => {
    return first + " " + last;
}

console.log(fullName("Aozora"));
console.log(fullName("Setsuna", "Rika"));