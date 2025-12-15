export{}

let ab = Number(process.argv[2]); // Account Balance
let wa = Number(process.argv[3]); // Withdrawal Amount

if (isNaN(ab) || isNaN(wa) || ab === undefined || wa === undefined) {
    console.log('Invalid Input');
    process.exit(0);
}

if (wa > ab) {
    console.log('Insufficient balance');
} else if (wa > 5000) {
    console.log('Exceeds per-withdrawal limit');
} else {
    console.log('Withdrawal approved')
}
