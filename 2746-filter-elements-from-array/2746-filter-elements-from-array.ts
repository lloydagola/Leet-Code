type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr = [];
    
    arr.forEach((element, index) => {
        
        const condition = fn(element, index);
        
        if(condition) filteredArr.push(element);        
        
    });
    return filteredArr;
};