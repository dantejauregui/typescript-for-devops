export function isPalindrome(x: string): boolean {
    let lowed_cased = x.toLowerCase( );
    
    let splited_array = lowed_cased.split("");
    
    // creating a new array using "Spread Syntax", so .reverse does not change the original array called "splited_array":
    let reversed_string = [...splited_array].reverse().join("");
    
    if (lowed_cased === reversed_string) {
      return true
    }
    else {
      return false
    }
}

// Testing:
// isPalindrome("Abba");

// Task Description URL: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/typescript