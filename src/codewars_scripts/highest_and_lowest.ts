export class Kata {
    static highAndLow(numbers: string): string {
      const arrayStrings = numbers.split(" ").map(Number);
      
      let maxNum = Math.max(...arrayStrings);
      let minNum = Math.min(...arrayStrings)
      
      return `${maxNum} ${minNum}`;
    }
}


// Task Description URL:  https://www.codewars.com/kata/554b4ac871d6813a03000035/train/typescript