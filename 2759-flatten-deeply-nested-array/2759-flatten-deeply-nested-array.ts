type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    
    function flatten(arr:MultiDimensionalArray, depth:number): MultiDimensionalArray{
        if(n <= depth) return arr
        
        return arr.reduce((accumulator:MultiDimensionalArray, currentValue : MultiDimensionalArray | number) => {
            if(Array.isArray(currentValue)){
                accumulator.push(...flatten(currentValue, depth + 1))
            } else accumulator.push(currentValue)
            
                return accumulator
            }, []) 
        }
    
    return flatten(arr, 0)   
};