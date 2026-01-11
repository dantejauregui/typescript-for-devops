export function squareSum(numbers: number[]): number {
  let suma: number = 0;
  for (var val of numbers) {
    let expo = val ** 2;
    suma = suma + expo;
  }
  return suma;
}


// testing on terminal when you run "node dist/codewars_scripts/square_sum.js", just uncomment:
// const lista = [1, 2, 3];
// const suma = squareSum(lista);
// console.log(suma);