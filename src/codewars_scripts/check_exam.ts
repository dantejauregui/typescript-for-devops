export function checkExam(array1: string[], array2: string[]): number {
  
    let score = 0;
    
    for (let i = 0; i < array1.length; i++){
      if (array2[i] === "") {
        score = score
      } 
      else if (array1[i] === array2[i]) {
        score = score + 4         
      }
      else {
        score = score - 1  
      }
    }
    if ( score < 0) {
        score = 0;
    }
    return score
}

console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));


// URL: https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/typescript