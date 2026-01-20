export {}

const AccountBalanceInput:string = process.argv[2]
const WithdrawalAmountInput:string = process.argv[3]

const AccountBalance:number = Number(AccountBalanceInput)
const WithdrawalAmount:number = Number(WithdrawalAmountInput)

if (Number.isNaN(AccountBalanceInput) || Number.isNaN(WithdrawalAmountInput)) {
    console.log("Invalid Input")
    process.exit(1)
}

if (WithdrawalAmount > AccountBalance) {
    console.log("Insufficient balance")
} else if (WithdrawalAmount > 5000) {
    console.log("Exceeds per-withdrawal limit")
} else {
    console.log("Withdrawal approved")
}