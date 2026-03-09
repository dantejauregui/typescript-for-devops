export function repeatStr(n: number, s: string): string {
    let output:string = "";

    for(let i=0; i<n; i++) {
      output = output.concat(s);
    }
    return output;
}


// Task Description URL:  https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/typescript