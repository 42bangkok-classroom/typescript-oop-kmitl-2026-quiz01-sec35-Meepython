import { isStringObject } from "node:util/types";

export{}

let input:string = process.argv[2];

if (Number(input) < 0 || Number(input) > 100) { //Number(input) < 0 || isStringObject(input) || Number(input) > 100)
    console.log('Invalid Input');
    process.exit(0);
} else if (typeof input === 'string') {
    console.log('Invalid Input');
    process.exit(0);
}

let grade = Number(input);

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
    