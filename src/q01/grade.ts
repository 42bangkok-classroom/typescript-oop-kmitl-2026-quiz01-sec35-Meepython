const input = process.argv[2];

// validate existence
if (!input) {
  console.log("Invalid Input");
  process.exit(0);
}

const score = Number(input);

// validate number + range
if (Number.isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid Input");
  process.exit(0);
}

let grade: string;

if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Grade is ${grade}`);
