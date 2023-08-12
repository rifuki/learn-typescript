// function default parameter
const fullName = (first, last = "Umeko") => {
    return first + " " + last;
};
console.log(fullName("Aozora"));
console.log(fullName("Setsuna", "Rika"));
