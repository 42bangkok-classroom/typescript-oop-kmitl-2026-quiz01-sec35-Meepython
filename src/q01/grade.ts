import { isStringObject } from "node:util/types";

export{}

let input:number = Number(process.argv[2]);

if (isNaN(input) || input < 0 || input > 100) { 
    console.log('Invalid Input');
    process.exit(1);
} else if (typeof input === "string") {
    console.log('Invalid Input');
    process.exit(1);
}

let grade:number = input;

if (grade >= 80) {
    console.log('Grade is A');
} else if (grade >= 70) {
    console.log('Grade is B');
} else if (grade >= 60) {
    console.log('Grade is C');
} else if (grade >= 50) {
    console.log('Grade is D');
} else if (grade < 50) {
    console.log('Grade is F')
} else {
    console.log('Invalid Input');
}
    