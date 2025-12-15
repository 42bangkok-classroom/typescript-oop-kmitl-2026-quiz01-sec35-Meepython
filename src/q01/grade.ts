export{}

let input = parseInt(process.argv[2]);

console.log(input);

if (input < 0 || isNaN(input) || input > 100) {
    console.log('Invalid Input');
    process.exit(0);
}

if (input >= 80) {
    console.log('Grade is A');
} else if (input >= 70) {
    console.log('Grade is B');
} else if (input >= 60) {
    console.log('Grade is C');
} else if (input >= 50) {
    console.log('Grade is D');
} else if (input < 50) {
    console.log('Grade is F')
} else {
    console.log('Invalid Input');
}