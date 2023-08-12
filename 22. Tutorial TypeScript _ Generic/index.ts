function getData(value: any): any {
  return value;
}

console.log(getData("Aozora").length);
console.log(getData(2423).length);

function myData<T>(value: T) {
  return value;
}

console.log(myData("Rifuki").length);
console.log(myData(234));

const arrowFunc = <T> (value: T) => {
    return value;
}
