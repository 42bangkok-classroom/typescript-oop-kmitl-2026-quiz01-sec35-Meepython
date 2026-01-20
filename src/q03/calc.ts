export{}

const operator = process.argv[2]
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

// Check any empty input
if (!operator || !a || !b) {
    console.log("Invalid input")
    process.exit(0)
}

// Validate Numbers
if (isNaN(a) || isNaN(b)) {
    console.log("Invalid input")
}

if ((operator === "div") && (b === 0)) {
    console.log("Invalid input")
}

let result: number;

// operator handling
if (operator === "add") {
  result = a + b;
} else if (operator === "sub") {
  result = a - b;
} else if (operator === "mul") {
  result = a * b;
} else if (operator === "div") {
  result = a / b;
} else {
  console.log("Invalid operator");
  process.exit(0);
}

console.log(result.toString());
