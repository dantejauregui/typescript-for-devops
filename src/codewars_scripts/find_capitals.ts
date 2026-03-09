export function capitals (word: string): number[] {
    const final: number[] = []
      for (let i=0; i<word.length; i++) { 
      if(word[i] == word[i].toUpperCase( )){
        final.push(i);
        //this creates a new array everytime (inmmutable), not good:  final = [...final, i];
      }
    }
    return final
}

// URL: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/typescript