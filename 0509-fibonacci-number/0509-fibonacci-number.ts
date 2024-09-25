function fib(n: number): number {
    if(n <= 1) return n
    
    let total = 0
    let prev1 = 0
    let prev2 = 1
    
    for(let i = 0; i < n - 1; i++){
        let newFib = prev1 + prev2
        total = newFib
        prev1 = prev2
        prev2 = newFib
    }
    
    return total
};
