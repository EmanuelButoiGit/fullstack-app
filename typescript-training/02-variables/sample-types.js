var found = true;
var grade = 10.23;
var firstName = "Emy";
var lastName = "Butoi";
console.log(found);
// console.log("Hi, " + firstName + " " + lastName);
console.log("Hi, ".concat(firstName, " ").concat(lastName));
console.log("Your grade is " + grade);
// tsc -noEmitOnError sample-types.ts
