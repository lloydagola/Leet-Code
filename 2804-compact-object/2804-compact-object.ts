type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
     if (Array.isArray(obj)) {
        return obj
            .map(item => compactObject(item as Obj))
            .filter(Boolean);
    }
    else if(typeof obj === 'object' && obj !== null ){
        const result:Obj = {}
        Object.entries(obj).forEach(([key, value]) => {
            const compact = compactObject(value as Obj)
            if(Boolean(compact)) result[key] = compact
        })
        return result
    }
    return obj
};