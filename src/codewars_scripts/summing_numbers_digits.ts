export function sumDigits(n: number): number {
    const digits = Math.abs(n).toString().split('');
    let sum = 0;
    
    for (let i=0;i<digits.length;i++){
      sum = sum + Number(digits[i]);
    }
    
    return sum;
}


// Challenge url: https://www.codewars.com/kata/52f3149496de55aded000410/train/typescript