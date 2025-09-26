type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const combined = arr1.concat(arr2)
    const handler = {}
    
    combined.forEach((obj:ArrayType) => {
        if(!handler[obj.id]){
            handler[obj.id] = {...obj}
        }
        handler[obj.id] = {...handler[obj.id], ...obj}
    }); 
    
    
    
    return (Object.values(handler) as ArrayType[]).sort((a:ArrayType, b:ArrayType): number => a.id - b.id);
};