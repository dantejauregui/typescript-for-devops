export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
    let year_population:number = p0;
    let years:number = 0;
    
    while (p > year_population) {
      year_population = Math.trunc(year_population + (year_population * (percent / 100)) + aug);
      years++;
    }
    
    return years;
}

// Task Description URL:  https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript