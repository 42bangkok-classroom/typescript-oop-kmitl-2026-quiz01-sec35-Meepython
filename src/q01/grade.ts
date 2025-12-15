export{}

let input = parseInt(process.argv[2]);

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