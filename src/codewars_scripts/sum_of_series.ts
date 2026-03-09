export function getSum(a: number, b: number): number {
    let maxNum = Math.max(a, b);
    let minNum = Math.min(a, b);
    let sum = 0;

    for (let i = minNum; i <= maxNum; i++){
      sum = sum + i
    }
    return sum;
}

console.log(getSum(-2,4));

// Task Description URL: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/typescript