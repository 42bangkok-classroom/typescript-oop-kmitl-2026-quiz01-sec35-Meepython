export {}

const accountBalanceInput:string = process.argv[2]
const withdrawalAmountInput:string = process.argv[3]

if (accountBalanceInput === undefined || withdrawalAmountInput === undefined) {
  console.log("Invalid Input");
  process.exit(0);
}

if (accountBalanceInput.trim() === "" || withdrawalAmountInput.trim() === "") {
  console.log("Invalid Input");
  process.exit(0);
}

const accountBalance: number = Number(accountBalanceInput);
const withdrawalAmount: number = Number(withdrawalAmountInput);

if (Number.isNaN(accountBalance) || Number.isNaN(withdrawalAmount)) {
  console.log("Invalid Input");
  process.exit(0);
}

if (withdrawalAmount > 5000) {
  console.log("Exceeds limit");
} else if (withdrawalAmount > accountBalance) {
  console.log("Insufficient balance");
} else {
  console.log("approved");
}

