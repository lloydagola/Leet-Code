function map(arr: number[], fn: (n: number, i: number) => number): number[] {
     return arr.map((num, el) => fn(arr[el], el));    
};