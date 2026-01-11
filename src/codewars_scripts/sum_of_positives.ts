export function positiveSum(arr:number[]):number {
    let suma:number = 0
    
    for (var val of arr) {
      if (val > 0) {
        suma = suma + val
      }
    }
    return suma;
}

// Task Description URL: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/typescript


// Other alternative:
// export function positiveSum(arr:number[]):number {
//   return arr.filter(num => num > 0).reduce((sum, current) => sum + current, 0);
// }
// console.log(positiveSum([1,-4,7,12]));
