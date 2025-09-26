function maximumWealth(accounts: number[][]): number {

    let largest = 0

    for (let i = 0; i < accounts.length; i++) {
        let total = 0
        for (let j = 0; j < accounts[i].length; j++) total += accounts[i][j]
        
        if (total > largest) largest = total
    }

    return largest
    
};