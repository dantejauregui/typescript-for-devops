export function descendingOrder(n: number): number {
    let digits = String(n).split("").map(Number)
    let sortedString = digits.sort((a, b) => b - a)
    let sortedNumber = Number(sortedString.join(""))
    return sortedNumber
}


// Task Description URL:  https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript