// enum
// numeric enum
var Month1;
(function (Month1) {
    Month1[Month1["JAN"] = 1] = "JAN";
    Month1[Month1["FEB"] = 100] = "FEB";
    Month1[Month1["MAR"] = 101] = "MAR";
    Month1[Month1["APR"] = 102] = "APR";
    Month1[Month1["MAY"] = 103] = "MAY";
})(Month1 || (Month1 = {}));
console.log(Month1);
// string enum
var Month2;
(function (Month2) {
    Month2["JAN"] = "January";
    Month2["FEB"] = "February";
    Month2["MAR"] = "March";
    Month2["APR"] = "April";
    Month2["MAY"] = "May";
})(Month2 || (Month2 = {}));
console.log(Month2);
