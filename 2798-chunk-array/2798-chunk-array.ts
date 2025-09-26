type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const copy = arr.slice();
    const chunkArray = [];
    let startIndex = 0;
    
    while(startIndex < copy.length){        
        chunkArray.push(copy.slice(startIndex, startIndex + size));        
        startIndex += size;
    };
    
    return chunkArray;
    
};
