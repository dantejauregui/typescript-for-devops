export function findNeedle(haystack: any[]):string {
    for (var val in haystack) {
        if(haystack[val] === 'needle'){
            return `found the needle at position ${val}`;
        } 
        else {
            continue;
        }
    }
    return "The needle was not found in the haystack!";
}


// Task Description URL:  https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/typescript