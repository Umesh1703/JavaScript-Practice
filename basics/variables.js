const noPlate = 123;
let surname = "abc";
var name = "Umesh";
age = 21;
let city;

// noPlate = 456;     // This is not allowed

surname = "xyz";
name = "Guna";
age = 20;

console.log(noPlate);

console.table([noPlate,surname,name,age,city]);

/* Prefer not to use var because of issuse in block scope and functional scope */