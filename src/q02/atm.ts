export {}

const AccountBalanceInput = process.argv[2]
const WithdrawalAmountInput = process.argv[3]

if (!AccountBalanceInput || !WithdrawalAmountInput) {
    console.log("Invalid Input")
    process.exit(1)
}

const AccountBalance = Number(AccountBalanceInput)
const WithdrawalAmount = Number(WithdrawalAmountInput)

if (WithdrawalAmount > AccountBalance) {
    console.log("Insufficient balance")
} else if (WithdrawalAmount > 5000) {
    console.log("Exceeds per-withdrawal limit")
} else {
    console.log("Withdrawal approved")
}