const input:number = Number(process.argv[2])

if (!input || input <= 0) {
    console.log("Invalid Input")
}

let sum:number = 0

for (let index = 0; index < input; index++) {
    sum += index
}
