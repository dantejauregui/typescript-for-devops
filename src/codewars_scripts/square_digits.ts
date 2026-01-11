export class Kata {
    static squareDigits(num: number): number {
      let splitted = String(num).split("");
      let squared = [];
      for (var val of splitted) {
        squared.push(Number(val) ** 2);
      }
      return Number(squared.join(''))
    }
}

// Task Description URL:  https://www.codewars.com/kata/546e2562b03326a88e000020/train/typescript