type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
   return Array.isArray(obj) ? obj.length < 1 : Object.entries(obj).length < 1;
};