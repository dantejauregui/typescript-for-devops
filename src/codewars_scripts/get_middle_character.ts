export function getMiddle(s:string) {
    const middle = Math.floor(s.length/2);

    if (s.length % 2 === 0) {
        return s.slice(middle-1, middle+1); 
    }
    else {
        return s[middle];
    }
}

// Task Description URL:  https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript