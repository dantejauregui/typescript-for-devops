export function countPositivesSumNegatives(input: number[] | null): number[] {
  
    const initialValue = 0;
    
     if (input == null || input.length === 0) {
       return []
     }
     
    let positives = input.filter((num) => num > 0).reduce(
    (accumulator, currentValue) => accumulator + 1,
    initialValue,
    );
     
    let negatives = input.filter((num) => num < 0).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );
     
    return [positives, negatives]
}


// Task Description URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/typescript